document.getElementById('indRequestForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    await addDoc(collection(window.db, "requests"), {
        type: 'individual',
        createdBy: window.auth.currentUser.uid,
        medicine: document.getElementById('medNameInd').value,
        cost: Number(document.getElementById('costInd').value),
        status: 'pending',
        createdAt: new Date()
    });
    alert("Request Posted!");
});
