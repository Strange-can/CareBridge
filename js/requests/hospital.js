import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

document.getElementById('hospRequestForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    await addDoc(collection(window.db, "requests"), {
        type: 'hospital',
        createdBy: window.auth.currentUser.uid,
        patientId: document.getElementById('patientId').value,
        medicine: document.getElementById('medName').value,
        cost: Number(document.getElementById('cost').value),
        status: 'pending', // 🟢 'pending' means it needs money
        createdAt: new Date()
    });
    alert("Request Live!");
});
