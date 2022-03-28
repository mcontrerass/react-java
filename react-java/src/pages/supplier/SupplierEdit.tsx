import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, checkmark, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams, useRouteMatch } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import Supplier from './Supplier';
import { saveSupplier, searchSupplierById } from './SupplierApi';

const SupplierEdit: React.FC = () => {
    const { name } = useParams<{ name: string; }>();
    const [supplier, setSupplier] = useState<Supplier>({});
    const history = useHistory();
    const routeMatch: any = useRouteMatch("/page/supplier/:id");
    const id = routeMatch?.params?.id;

    useEffect(() => {
        search();
    }, [history.location.pathname]);

    const search = async () => {
        if (id === 'new') {
            setSupplier({});
        } else {
            let result = await searchSupplierById(id);
            setSupplier(result);
        }
    }

    const save = async () => {
        await saveSupplier(supplier);
        history.push('/page/suppliers');
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
                                    <IonInput onIonChange={e => supplier.documento = String(e.detail.value)}
                                    value={supplier.documento}
                                    placeholder="RUT o documento de identificación"></IonInput>
                                </IonItem>
                            </IonCol>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="stacked">Nombre</IonLabel>
                                    <IonInput onIonChange={e => supplier.nombre = String(e.detail.value)}
                                    value={supplier.nombre}
                                    placeholder="Nombre"></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="stacked">Teléfono</IonLabel>
                                    <IonInput onIonChange={e => supplier.telefono = String(e.detail.value)}
                                    value={supplier.telefono}
                                    placeholder="Teléfono"></IonInput>
                                </IonItem>
                            </IonCol>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="stacked">Web</IonLabel>
                                    <IonInput onIonChange={e => supplier.web = String(e.detail.value)}
                                    value={supplier.web}
                                    placeholder="Web"></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="stacked">Email</IonLabel>
                                    <IonInput onIonChange={e => supplier.email = String(e.detail.value)}
                                    value={supplier.email}
                                    placeholder="Email"></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="stacked">Representante</IonLabel>
                                    <IonInput onIonChange={e => supplier.representante = String(e.detail.value)}
                                    value={supplier.representante}
                                    placeholder="Representante"></IonInput>
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

export default SupplierEdit;
