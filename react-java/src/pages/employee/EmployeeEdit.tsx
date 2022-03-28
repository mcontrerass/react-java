import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, checkmark, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams, useRouteMatch } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import Employee from './Employee';
import { saveEmployee, searchEmployeeById } from './EmployeeApi';

const EmployeeEdit: React.FC = () => {
    const { name } = useParams<{ name: string; }>();
    const [employee, setEmployee] = useState<Employee>({});
    const history = useHistory();
    const routeMatch: any = useRouteMatch("/page/employee/:id");
    const id = routeMatch?.params?.id;

    useEffect(() => {
        search();
    }, [history.location.pathname]);

    const search = async () => {
        if (id === 'new') {
            setEmployee({});
        } else {
            let result = await searchEmployeeById(id);
            setEmployee(result);
        }
    }

    const save = async () => {
        await saveEmployee(employee);
        history.push('/page/employees');
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
                                    <IonInput onIonChange={e => employee.documento = String(e.detail.value)}
                                    value={employee.documento}
                                    placeholder="RUT o documento de identificación"></IonInput>
                                </IonItem>
                            </IonCol>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="stacked">Nombres</IonLabel>
                                    <IonInput onIonChange={e => employee.nombres = String(e.detail.value)}
                                    value={employee.nombres}
                                    placeholder="Nombres"></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="stacked">Apellido Paterno</IonLabel>
                                    <IonInput onIonChange={e => employee.apellidoPaterno = String(e.detail.value)}
                                    value={employee.apellidoPaterno}
                                    placeholder="Apellido Paterno"></IonInput>
                                </IonItem>
                            </IonCol>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="stacked">Apellido Materno</IonLabel>
                                    <IonInput onIonChange={e => employee.apellidoMaterno = String(e.detail.value)}
                                    value={employee.apellidoMaterno}
                                    placeholder="Apellido Materno"></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="stacked">Email</IonLabel>
                                    <IonInput onIonChange={e => employee.email = String(e.detail.value)}
                                    value={employee.email}
                                    placeholder="Email"></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="stacked">Cargo</IonLabel>
                                    <IonInput onIonChange={e => employee.cargo = String(e.detail.value)}
                                    value={employee.cargo}
                                    placeholder="Cargo"></IonInput>
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

export default EmployeeEdit;
