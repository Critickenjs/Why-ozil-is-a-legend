import React, { useState, useEffect } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { auth, storage } from '../../Firebase'; 

const Profile = () => {
    const [profilePhoto, setProfilePhoto] = useState(null);
    const user = auth.currentUser; // Obtenez l'utilisateur actuellement connecté

    useEffect(() => {
        // Fonction pour récupérer l'URL de l'image existante
        const fetchProfilePhoto = async () => {
            try {
                if (user) {
                    const storageRef = ref(storage, `profiles/${user.uid}/profilePhoto.jpg`);
                    console.log('storageRef:', storageRef);
                    const url = await getDownloadURL(storageRef);
                    setProfilePhoto(url);
                }
            } catch (error) {
                console.error('Error fetching profile photo:', error);
            }
        };

        // Appeler la fonction de récupération de l'image existante
        fetchProfilePhoto();
    }, [user]); // L'effet dépend de l'utilisateur, donc il s'exécute à chaque changement d'utilisateur.

    const handlePhotoUpload = (event) => {
        if (!user) {
            console.error('User not authenticated.');
            return;
        }

        const file = event.target.files[0];
        const storageRef = ref(storage, `profiles/${user.uid}/profilePhoto.jpg`);

        uploadBytesResumable(storageRef, file)
            .then((snapshot) => {
                console.log('Profile photo uploaded successfully!');
                getDownloadURL(storageRef)
                    .then((url) => {
                        console.log('Download URL:', url);
                        setProfilePhoto(url);
                    })
                    .catch((error) => {
                        console.error('Error getting download URL:', error);
                    });
            })
            .catch((error) => {
                console.error('Error uploading profile photo:', error);
            });
    };

    return (
        <div>
            <h1>Profile</h1>
            <input type="file" onChange={handlePhotoUpload} />
            {profilePhoto && <img src={profilePhoto} alt="Profile" />}
        </div>
    );
};

export default Profile;
