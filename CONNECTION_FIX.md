# 🛠️ MongoDB Connection Troubleshooter

Your backend is trying to connect! If the database name **`annapurna_hub`** is NOT appearing, it means MongoDB Atlas is blocking the connection for safety. Follow these 3 quick fixes **to fix the link immediately**:

---

## **Fix 1: White-list Your Network (Most Common)**
MongoDB Atlas only allows access from "Safe" networks. You need to open it:
1.  In the Atlas sidebar, click **"Network Access"** (under Security).
2.  Click the blue **"Add IP Address"** button.
3.  Click **"Allow Access from Anywhere"** (this sets it to `0.0.0.0/0`).
4.  Click **"Confirm"**. **Wait 60 seconds** for it to become active.

---

## **Fix 2: Verify Your Database User**
1.  In the Atlas sidebar, click **"Database Access"** (under Security).
2.  Look for the user named **`admin`**.
3.  If you don't see it, create a NEW one:
    *   **User:** `admin`
    *   **Password:** `rajeshwari807399`
    *   **Privileges:** Select "Atlas Admin" (full power).
4.  Click **"Add User"**.

---

## **Fix 3: Restart Your Server**
Once you do Fix 1 & 2:
1.  Go to your **Backend Terminal** on your laptop.
2.  Stop it by pressing `Ctrl + C`.
3.  Type `npm run dev` and press Enter again.
4.  Look for the word: **"MongoDB Connected: Cluster0"**.

---

### **🚀 Final Test:**
**As soon as you see "MongoDB Connected", go to your site, register once, and your database name will appear!** 🏢🍛🛳️🚀🏙️✨❤️📍
