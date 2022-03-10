import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, checkmark, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import Vendor from './Vendor';
import { saveVendor, searchVendorById } from './VendorApi';

const VendorEdit: React.FC = () => {
    const { name, id } = useParams<{ name: string; id: string }>();
    const [vendor, setVendor] = useState<Vendor>({});
    const history = useHistory();

    useEffect(() => {
        search();
    }, []);

    const search = () => {
        if (id !== 'new') {
            let result = searchVendorById(id);
            setVendor(result);
        }
    }

    const save = () => {
        saveVendor(vendor);
        history.push('/page/vendors');
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>{name}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">{name}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonCard>
                        <IonTitle>{id === 'new' ? 'Nuevo Empleado' : 'Mantención de Empleado'}</IonTitle>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="stacked">Documento</IonLabel>
                                    <IonInput onIonChange={e => vendor.documento = String(e.detail.value)}
                                    value={vendor.documento}
                                    placeholder="RUT o documento de identificación"></IonInput>
                                </IonItem>
                            </IonCol>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="stacked">Nombres</IonLabel>
                                    <IonInput onIonChange={e => vendor.nombres = String(e.detail.value)}
                                    value={vendor.nombres}
                                    placeholder="Nombres"></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="stacked">Apellido Paterno</IonLabel>
                                    <IonInput onIonChange={e => vendor.apellidoPaterno = String(e.detail.value)}
                                    value={vendor.apellidoPaterno}
                                    placeholder="Apellido Paterno"></IonInput>
                                </IonItem>
                            </IonCol>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="stacked">Apellido Materno</IonLabel>
                                    <IonInput onIonChange={e => vendor.apellidoMaterno = String(e.detail.value)}
                                    value={vendor.apellidoMaterno}
                                    placeholder="Apellido Materno"></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="stacked">Email</IonLabel>
                                    <IonInput onIonChange={e => vendor.email = String(e.detail.value)}
                                    value={vendor.email}
                                    placeholder="Email"></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonItem>
                            <IonButton onClick={save} color="success" fill="solid" slot="end" size="default">
                                <IonIcon icon={checkmark} />
                                Guardar
                            </IonButton>
                        </IonItem>
                    </IonCard>
                </IonContent>
            </IonContent>
        </IonPage>
    );
};

export default VendorEdit;
