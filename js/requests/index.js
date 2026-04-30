import { collection, query, where, getDocs, orderBy } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const requestsContainer = document.getElementById('right');

async function loadRequests(filterOpts = {}) {
    // 1. Clear current cards
    requestsContainer.innerHTML = '';
    
    // 2. Build Query (Showing only unpaid requests)
    const q = query(
        collection(window.db, "requests"), 
        where("status", "==", "pending"),
        orderBy("createdAt", "desc") 
    );

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
        requestsContainer.innerHTML = `<article><h3>No active requests found. 🕊️</h3></article>`;
        return;
    }

    querySnapshot.forEach((docSnap) => {
        const item = docSnap.data();
        const id = docSnap.id;
        
        // Logic for UI labels
        const isHospital = item.type === 'hospital';
        const priorityColor = item.urgent ? '#E63946' : 'darkblue';
        const priorityText = item.urgent ? 'Life' : 'Normal';

        // 3. Create the Card HTML
        const article = document.createElement('article');
        article.innerHTML = `
            <header>
                <div class="inner-1">
                    ${isHospital ? `<div class="hospital-logo"></div>` : `<img src='/icons/first-aid.svg' style="width:1.5rem"/>`}
                    <span>${isHospital ? 'Hospital Request' : 'Individual in Need'}</span>
                </div>
                <div role="button" class="outline secondary">${item.type}</div>
            </header>
            
            <p>Medicines: <b>${item.medicine}</b></p>
            ${isHospital ? `<p>Patient ID: ${item.patientId}</p>` : ''}
            <p>Request Date: <small>${item.createdAt.toDate().toLocaleDateString()}</small></p>
            
            <div class="tags">
                <span class="priority" style="background-color: ${priorityColor};">${priorityText}</span>
                <span class="donation-amount">$${item.cost}</span>
            </div>
            
            <footer class="grid">
                <button onclick="payNow('${id}')" style="font-weight: bold;">
                    DONATE <img src='/icons/tip-jar.svg' />
                </button>
                <button onclick="contactUser('${item.createdBy}', '${item.medicine}')" class="secondary" style="font-weight: bold;">
                    CONTACT <img src='/icons/paper-plane-tilt.svg' />
                </button>
            </footer>
        `;
        requestsContainer.appendChild(article);
    });
}

// 4. Contact Function (The Hackathon Mailer)
window.contactUser = async (uid, med) => {
    // Fetch the user's email from the 'users' collection
    const userSnap = await window.getUserData(uid);
    if (userSnap) {
        const subject = encodeURIComponent(`Inquiry regarding request for ${med}`);
        const body = encodeURIComponent(`Hello, I saw your request on CareBridge and would like to help...`);
        window.location.href = `mailto:${userSnap.email}?subject=${subject}&body=${body}`;
    }
};

// Start the engine
loadRequests();
