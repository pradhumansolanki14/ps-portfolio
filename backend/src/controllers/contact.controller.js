import Contact from "../models/Contact.js";
import { createTransporter } from "../utils/nodemailer.js";

//  SUBMIT
export const submitContact = async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
      projectType: req.body.projectType,
      status: "lead",
    };

    const contact = await Contact.create(data);

    const transporter = createTransporter();

    //  ADMIN EMAIL
   await transporter.sendMail({
  from: `"Portfolio | Pradhuman.dev" <${process.env.EMAIL_USER}>`,
  to: process.env.EMAIL_USER,
  replyTo: data.email,
  subject: ` New Project Request - ${data.projectType}`,
html: `
<style>
  body {
    margin:0;
    padding:0;
    background:#f9fafb;
  }

  .card {
    background:#ffffff;
    color:#111827;
  }

  .muted {
    color:#6b7280;
  }

  .box {
    background:#f3f4f6;
  }

  @media (prefers-color-scheme: dark) {
    body {
      background:#0b0f14 !important;
    }

    .card {
      background:#111827 !important;
      color:#e5e7eb !important;
      border:1px solid rgba(255,255,255,0.08) !important;
    }

    .muted {
      color:#9ca3af !important;
    }

    .box {
      background:#0f172a !important;
      border:1px solid rgba(255,255,255,0.05) !important;
    }
  }
</style>

<div style="padding:30px;font-family:Arial,sans-serif;">
  
  <div class="card" style="max-width:600px;margin:auto;border-radius:12px;padding:28px;border:1px solid #e5e7eb;">
    
    <h2 style="color:#10b981;">📩 New Client Inquiry</h2>

    <!-- INFO BLOCK -->
    <div style="margin-top:16px;margin-bottom:16px;">
      <p style="margin:6px 0;"><b>Name:</b> ${data.name}</p>
      <p style="margin:6px 0;"><b>Email:</b> ${data.email}</p>
      <p style="margin:6px 0;"><b>Project:</b> ${data.projectType}</p>
    </div>

    <!-- MESSAGE CARD -->
    <div class="box" style="margin:20px 0;padding:14px;border-radius:10px;">
      <p style="margin:0;">
        “${data.message}”
      </p>
    </div>

    <!-- ACTION -->
    <div style="margin-top:20px;">
      <a href="mailto:${data.email}" 
         style="
           display:inline-block;
           padding:10px 16px;
           border-radius:999px;
           background:linear-gradient(90deg,#10b981,#14b8a6);
           color:#000;
           text-decoration:none;
           font-weight:600;
        ">
        Reply to Client →
      </a>
    </div>

    <hr style="margin:24px 0;" />

    <p class="muted" style="font-size:13px;">
      New lead received from portfolio contact form
    </p>

  </div>

</div>
`
});
    //  CLIENT EMAIL
   await transporter.sendMail({
  from: `"Pradhuman.dev" <${process.env.EMAIL_USER}>`,
  to: data.email,
  replyTo: process.env.EMAIL_USER,
  subject: `Got your message, ${data.name}`,
  html: `
<style>
  body {
    margin:0;
    padding:0;
    background:#f9fafb;
  }

  .card {
    background:#ffffff;
    color:#111827;
  }

  .muted {
    color:#6b7280;
  }

  @media (prefers-color-scheme: dark) {
    body {
      background:#0b0f14 !important;
    }

    .card {
      background:#111827 !important;
      color:#e5e7eb !important;
      border:1px solid rgba(255,255,255,0.08) !important;
    }

    .muted {
      color:#9ca3af !important;
    }
  }
</style>

<div style="padding:30px;font-family:Arial,sans-serif;">
  
  <div class="card" style="max-width:600px;margin:auto;border-radius:12px;padding:28px;border:1px solid #e5e7eb;">
    
    <h2 style="color:#10b981;">✅ Inquiry Received</h2>

    <p>Hello <b>${data.name}</b>,</p>

    <p class="muted">
      Thanks for reaching out regarding your <b>${data.projectType}</b>.  
      I’ve received your message and will review it shortly.
    </p>

    <div style="margin:20px 0;padding:14px;background:#f3f4f6;border-radius:10px;">
      <p style="margin:0;">
        “${data.message}”
      </p>
    </div>

    <p class="muted">
      I’ll get back to you within 24–48 hours.
    </p>

    <hr style="margin:24px 0;" />

    <p class="muted" style="font-size:13px;">
      This is an automated confirmation — no need to reply.
    </p>

    <p>
      Regards,<br/>
      <b style="color:#10b981;">Pradhuman Solanki</b>
    </p>

  </div>

</div>
`
});

    res.json({ success: true, data: contact });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to send message" });
  }
};

//  GET ALL
export const getAllContacts = async (req, res) => {
  try {
const contacts = await Contact.find()
  .sort({ createdAt: -1 })
  .populate("projectId", "published");

res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch contacts" });
  }
};

//  UPDATE STATUS



export const updateContactStatus = async (req, res) => {
  try {
   

    if (!req.body || !req.body.status) {
      return res.status(400).json({ error: "Status is required" });
    }

    const { status } = req.body;

    if (!["lead", "ongoing", "completed"].includes(status)) {
      return res.status(400).json({ error: "Invalid status" });
    }

   const updated = await Contact.findByIdAndUpdate(
  req.params.id,
  { status },
  { returnDocument: "after" }
);

// 🔥 ADD THIS BLOCK
if (!updated) {
  return res.status(404).json({ error: "Contact not found" });
}

return res.json(updated);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

//  DELETE CONTACT
export const deleteContact = async (req, res) => {
  try {
    const deleted = await Contact.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ error: "Contact not found" });
    }

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete contact" });
  }
};