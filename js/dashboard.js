const authContent = document.getElementById('authContent');
const logoutBtn = document.getElementById('logoutBtn');

auth.onAuthStateChanged(async (user) => {
    if (!user) {
        window.location.href = '/login';
        return;
    }
    
    // Get user role from Firestore
    const userDoc = await db.collection('users').doc(user.uid).get();
    const userData = userDoc.data();
    const role = userData?.role || 'unknown';
    
    // Show logout button
    logoutBtn.style.display = 'block';
    
    // Render dashboard based on role
    authContent.innerHTML = `
        <h1>Dashboard</h1>
        <p>Welcome, ${user.displayName || user.email}!</p>
        <p>Role: <strong>${role}</strong></p>
        
        ${role === 'donor' ? `
            <div>
                <h2>Donor Portal</h2>
                <p>Browse medical requests to fund.</p>
                <button onclick="window.location.href='/requests'">View Requests</button>
            </div>
        ` : ''}
        
        ${role === 'individual' ? `
            <div>
                <h2>Patient Portal</h2>
                <p>Create and track your medical requests.</p>
                <button onclick="window.location.href='/my-requests'">My Requests</button>
            </div>
        ` : ''}
    `;
});

logoutBtn.addEventListener('click', async () => {
    await auth.signOut();
    window.location.href = '/login';
});
