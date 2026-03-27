# 🌿 Secure MongoDB Implementation Plan

To connect **Annapurna Hub** to a real-world database for your hackathon, follow this **3-Minute High-Speed Setup**. For your safety and security, you should create the account yourself, and then I will help you plug it in!

### **🚨 Important Safety Note**
I cannot log into your personal Gmail account or create a database account on your behalf (this is to protect your personal security). However, you can do it in **3 simple steps**:

---

## **Step 1: Get Your Free Database URI**
1.  Go to [**MongoDB Atlas**](https://www.mongodb.com/cloud/atlas/register) and Sign Up (you can use your Gmail).
2.  Create a **FREE Shared Cluster** (select any region, e.g., Mumbai for fast response).
3.  Click **"Database Access"** in the sidebar:
    *   Create a user (e.g., name: `admin`, password: `your_password_here`).
4.  Click **"Network Access"** in the sidebar:
    *   Click **"Add IP Address"** → Select **"Allow Access from Anywhere"**.
5.  Click **"Database"** (under Deployment) → **"Connect"** → **"Drivers"**:
    *   Copy the **Connection String**. It looks like this:
    `mongodb+srv://admin:rajeshwari807399@cluster0.abc.mongodb.net/?retryWrites=true&w=majority`

---

## **Step 2: Update Your Backend Connection**
Once you have the string, simply paste it into your `.env` file or tell me the string (without the password) and I will configure it for you!

### **Backend Configuration (`backend/.env`)**
```env
# Paste your new URI here!
MONGO_URI=mongodb+srv://admin:rajeshwari807399@cluster0.abc.mongodb.net/annapurna_hub?retryWrites=true&w=majority
```

---

## **🚀 Why do this?**
-   **Permanent Storage**: Your data will stay forever (even if the server restarts).
-   **Multi-User Sync**: Anyone using the app from different laptops will see the same data.
-   **Hackathon Ready**: Judges love seeing a connected, real-world database!

### **💡 Pro-Tip (Hackathon Speed)**
If you are in a rush and cannot create the account now, **don't worry!** My backup **Mock Database** (Memory Server) is already working and will save all your donations for the current session.

**Whenever you are ready, just send me the URL from Step 5!** 🏛️🍛⚖️🚀🏙️✨❤️📍
