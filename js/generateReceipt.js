async function generateReceipt(appointmentData) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Hospital Name & Logo (Optional)
    doc.setFontSize(18);
    doc.setTextColor(40, 40, 40);
    doc.text("🏥 Taqwa Cups ", 20, 20);
    doc.setFontSize(12);
    doc.text("Healing through Sunnah | Certified Hijamatologist", 20, 30);
    doc.line(20, 35, 190, 35); // Horizontal line

    // Form-style Layout
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text("📜 Appointment Receipt", 80, 50);

    doc.setFontSize(12);
    doc.text("Patient Name:", 20, 65);
    doc.text(appointmentData.name, 80, 65);

    doc.text("Phone:", 20, 75);
    doc.text(appointmentData.phone, 80, 75);

    doc.text("Appointment Date:", 20, 85);
    doc.text(appointmentData.date, 80, 85);

    doc.text("Time:", 20, 95);
    doc.text(appointmentData.time, 80, 95);

    doc.text("Gender:", 20, 105);
    doc.text(appointmentData.gender, 80, 105);

    doc.text("Address:", 20, 115);
    doc.text(appointmentData.address, 80, 115);

    // Footer
    doc.line(20, 140, 190, 140);
    doc.setFontSize(10);
    
    doc.text("📞 Contact: +91 6362648902 | 🌐 Website: www.taqwacups.com", 20, 160);

    // Save PDF
    doc.save(`TaqwaCups_Appointment_${appointmentData.name}.pdf`);
}
