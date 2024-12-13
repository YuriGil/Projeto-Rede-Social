const express = require("express");
const nodemailer = require("nodemailer");
const app = express();

app.use(express.json());

// Endpoint para enviar o email de recuperação
app.post("/send-recovery-email", async (req, res) => {
  const { email, userId } = req.body;

  if (!email || !userId) {
    return res.status(400).send("Dados incompletos.");
  }

  // Configuração do serviço de e-mail
  const transporter = nodemailer.createTransport({
    service: "Gmail", // ou outro provedor
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Gera o link de recuperação
  const recoveryLink = `http://localhost:3001/recovery?token=${userId}`;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Redefinição de senha",
    html: `<p>Olá,</p><p>Clique no link abaixo para redefinir sua senha:</p><a href="${recoveryLink}">${recoveryLink}</a>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("E-mail enviado com sucesso.");
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    res.status(500).send("Erro ao enviar o e-mail.");
  }
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
