import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  updateDoc,
  where
} from 'firebase/firestore';
import { auth, db } from './config';

// Colección para los viajes
const TRIPS_COLLECTION = 'trips';

// Guardar un nuevo viaje
export const saveTrip = async (tripData) => {
  try {
    // Verificar si auth está definido antes de acceder a currentUser
    if (!auth || !auth.currentUser) {
      console.log('Usuario no autenticado - saveTrip');
      throw new Error('Usuario no autenticado');
    }

    const user = auth.currentUser;
    const tripWithUser = {
      ...tripData,
      userId: user.uid,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    console.log('🟡 Guardando viaje en Firestore...');
    const docRef = await addDoc(collection(db, TRIPS_COLLECTION), tripWithUser);
    console.log('🟢 Viaje guardado con ID:', docRef.id);
    
    return { id: docRef.id, ...tripWithUser };
  } catch (error) {
    console.log('Error guardando viaje:', error.message); // Cambiado a console.log
    throw error;
  }
};

// Obtener todos los viajes del usuario actual
export const getUserTrips = async () => {
  try {
    // Verificar si auth está definido antes de acceder a currentUser
    if (!auth || !auth.currentUser) {
      console.log('Usuario no autenticado - getUserTrips');
      return []; // Retornar array vacío en lugar de lanzar error
    }

    const user = auth.currentUser;
    const q = query(
      collection(db, TRIPS_COLLECTION),
      where('userId', '==', user.uid),
      orderBy('createdAt', 'desc')
    );

    const querySnapshot = await getDocs(q);
    const trips = [];
    
    querySnapshot.forEach((doc) => {
      trips.push({ id: doc.id, ...doc.data() });
    });

    console.log('🟢 Viajes obtenidos:', trips.length);
    return trips;
  } catch (error) {
    console.log('Error obteniendo viajes:', error.message); // Cambiado a console.log
    return []; // Retornar array vacío en lugar de lanzar error
  }
};

// Actualizar un viaje existente
export const updateTrip = async (tripId, tripData) => {
  try {
    if (!auth || !auth.currentUser) {
      console.log('Usuario no autenticado - updateTrip');
      return; // Salir silenciosamente
    }

    const tripRef = doc(db, TRIPS_COLLECTION, tripId);
    await updateDoc(tripRef, {
      ...tripData,
      updatedAt: new Date()
    });
  } catch (error) {
    console.log('Error actualizando viaje:', error.message); // Cambiado a console.log
    // No lanzar el error
  }
};

// Eliminar un viaje
export const deleteTrip = async (tripId) => {
  try {
    if (!auth || !auth.currentUser) {
      console.log('Usuario no autenticado - deleteTrip');
      return; // Salir silenciosamente
    }

    const tripRef = doc(db, TRIPS_COLLECTION, tripId);
    await deleteDoc(tripRef);
  } catch (error) {
    console.log('Error eliminando viaje:', error.message); // Cambiado a console.log
    // No lanzar el error
  }
};

// Obtener un viaje específico
export const getTripById = async (tripId) => {
  try {
    if (!auth || !auth.currentUser) {
      console.log('Usuario no autenticado - getTripById');
      return null; // Retornar null en lugar de lanzar error
    }

    const tripRef = doc(db, TRIPS_COLLECTION, tripId);
    const tripDoc = await getDoc(tripRef);
    
    if (tripDoc.exists()) {
      return { id: tripDoc.id, ...tripDoc.data() };
    } else {
      console.log('Viaje no encontrado');
      return null;
    }
  } catch (error) {
    console.log('Error obteniendo viaje:', error.message); // Cambiado a console.log
    return null; // Retornar null en lugar de lanzar error
  }
};