import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const authNav = document.getElementById('auth-ui-nav');
const authSide = document.getElementById('auth-ui-side');

onAuthStateChanged(window.auth, (user) => {
  if (user) {
    const userData = await window.getUserData(user.uid);
    const role = userData?.role; // 'donor', 'hospital', or 'individual'

    // 1. Update "Need Help" Link
    const helpLink = document.querySelector('a[href="/login"]'); // Targets the "Need Help" link
    if (helpLink) {
        if (role === 'hospital') {
            helpLink.href = "/requests/new/hospital";
            helpLink.innerHTML = `New Request <img src="/icons/plus.svg" style="width:1rem"/>`;
        } else if (role === 'individual') {
            helpLink.href = "/requests/new/individual";
            helpLink.innerHTML = `Request Aid <img src="/icons/plus.svg" style="width:1rem"/>`;
        } else if (role === 'donor') {
            // Donors don't need help, they GIVE help. 
            // Let's point them to the About/FAQ or hide it.
            helpLink.href = "/about"; 
            helpLink.innerHTML = `How it works ❓`;
        }
    }

    // 2. Update "Hospital Portal" Link
    // If a hospital is already logged in, take them to their specific dashboard
    const hospLink = document.querySelector('a[href="/login"]');
    if (hospLink && role === 'hospital') {
        hospLink.href = "/dashboard";
        hospLink.innerHTML = `My Hospital 🏥`;
    }

    // Add Logout Logic
    const handleLogout = async (e) => {
      e.preventDefault();
      await signOut(window.auth);
      localStorage.clear();
      window.location.href = "/";
    };

    document.getElementById('logout-btn').addEventListener('click', handleLogout);
    document.getElementById('logout-btn-side').addEventListener('click', handleLogout);

  } else {
    // Reset to Login button if logged out
    const loginHTML = `<a role="button" href="/login">Login <img src='/icons/user.svg' /></a>`;
    authNav.innerHTML = loginHTML;
    authSide.innerHTML = loginHTML;
  }
});
