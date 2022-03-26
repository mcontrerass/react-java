import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, checkmark, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import Customer from './Customer';
import { removeCustomer, saveCustomer, searchCustomerById, searchCustomers } from './CustomerApi';

const CustomerEdit: React.FC = () => {
    const { name, id } = useParams<{ name: string; id: string }>();
    const [customer, setCustomer] = useState<Customer>({});
    const history = useHistory();

    useEffect(() => {
        search();
    }, []);

     const search = async () => {
        if (id !== 'new') {
            let result = await searchCustomerById(id);
            setCustomer(result);
        }
    }

    const save = () => {
        saveCustomer(customer);
        history.push('/page/customers');
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
                        <IonTitle>{id === 'new' ? 'Nuevo Cliente' : 'Mantención de Cliente'}</IonTitle>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="stacked">Documento</IonLabel>
                                    <IonInput onIonChange={e => customer.documento = String(e.detail.value)}
                                    value={customer.documento}
                                    placeholder="RUT o documento de identificación"></IonInput>
                                </IonItem>
                            </IonCol>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="stacked">Nombres</IonLabel>
                                    <IonInput onIonChange={e => customer.nombres = String(e.detail.value)}
                                    value={customer.nombres}
                                    placeholder="Nombres"></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="stacked">Apellido Paterno</IonLabel>
                                    <IonInput onIonChange={e => customer.apellidoPaterno = String(e.detail.value)}
                                    value={customer.apellidoPaterno}
                                    placeholder="Apellido Paterno"></IonInput>
                                </IonItem>
                            </IonCol>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="stacked">Apellido Materno</IonLabel>
                                    <IonInput onIonChange={e => customer.apellidoMaterno = String(e.detail.value)}
                                    value={customer.apellidoMaterno}
                                    placeholder="Apellido Materno"></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="stacked">Email</IonLabel>
                                    <IonInput onIonChange={e => customer.email = String(e.detail.value)}
                                    value={customer.email}
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

export default CustomerEdit;
