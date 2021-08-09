import create from 'zustand'
import firebase from '../firebase'
import TPatients from '../types/TPatients';

const docRef = firebase.firestore().collection('patients');

interface PatientsState {
    patients: TPatients[];
    getPatients: () => void;
}
export const useStore = create<PatientsState>((set) => ({
    patients: [],

    getPatients: () => {
        docRef.onSnapshot(snapshot => {
            const dataList = snapshot.docs.map(doc => doc.data()) as TPatients[];
            set({
                patients: dataList
            });
        }
        )
    },
}))


