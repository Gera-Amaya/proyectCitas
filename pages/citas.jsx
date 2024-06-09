import React, { useState } from 'react';
import Header from '../components/Header';
import firebase from '../src/app/utils/firebase-config';
import { collection, addDoc } from 'firebase/firestore/lite';
import styles from '../styles/Auth.module.css';
import db from '../src/app/utils/firebase-config';

function CreateAppointmentPage() {
    const [formData, setFormData] = useState({
        name: "",
        date: "",
        email: "",
        phone: "",
        service: "",
        time: "",
        message: ""
        });
    
        const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        };
    
        const handleSubmit = async (e) => {
        e.preventDefault();
    
        const { name, email, phone, date, time, service } = formData;
    
        if (!name || !email || !phone || !date || !time || !service) {
            setFormData({
            ...formData,
            message: "Por favor rellena todos los campos"
            });
            return;
        }
    
        try {
            // Guarda los datos del formulario en Firebase Realtime Database
            await addDoc(collection(db, 'appointments'), formData);

            console.log("Datos del formulario enviados correctamente a Firebase");
            setFormData({
            name: "",
            date: "",
            email: "",
            phone: "",
            service: "",
            time: "",
            message: "La cita se ha creado con éxito y se ha almacenado en Firebase."
            });
        } catch (error) {
            console.error("Error al enviar los datos del formulario a Firebase:", error.message);
        }
        };
    
        return (
        <div>
            <Header />
            <div className={styles.container}>
                <form className={styles.formContainer} onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <label>Nombre:</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className={styles.inputGroup}>
                        <label>Fecha:</label>
                        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
                    </div>
                    <div className={styles.inputGroup}>
                        <label>Correo Electrónico:</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className={styles.inputGroup}>
                        <label>Teléfono:</label>
                        <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
                    </div>
                    <div className={styles.inputService}>
                        <label>Servicio:</label>
                        <select name="service" value={formData.service} onChange={handleChange} required>
                        <option value="">Seleccione un servicio</option>
                        <option value="Servicio 1">Servicio 1</option>
                        <option value="Servicio 2">Servicio 2</option>
                        {/* Agrega más opciones de servicio según sea necesario */}
                        </select>
                    </div>
                    <div className={styles.inputGroup}>
                        <label>Hora:</label>
                        <input type="time" name="time" value={formData.time} onChange={handleChange} required />
                    </div>
                    <button type="submit" className={styles.submitButton}>Crear Cita</button>
                </form>
                {formData.message && <p>{formData.message}</p>}
            </div>
        </div>
        );
    }
    
    export default CreateAppointmentPage;
