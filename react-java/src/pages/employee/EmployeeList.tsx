import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import Employee from './Employee';
import { removeEmployee, searchEmployees } from './EmployeeApi';

const EmployeeList: React.FC = (props: any) => {
  const { name } = useParams<{ name: string; }>();
  const [empleados, setEmpleados] = useState<Employee[]>([]);
  const history = useHistory();

  useEffect(() => {
    search();
  }, [history.location.pathname]);

  const search = () => {
    let result = searchEmployees();
    setEmpleados(result);
  }

  const remove = (id: string) => {
    removeEmployee(id);
    search();
  }

  const addEmployee = () => {
    history.push('/page/Employee/new');
  }

  const editEmployee = (id:string) => {
    history.push('/page/Employee/' + id);
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
            <IonTitle>Gestión de Empleados</IonTitle>
            <IonItem>
              <IonButton onClick={addEmployee} color="primary" fill="solid" slot="end" size="default">
                <IonIcon icon={add} />
                Agregar Empleado
              </IonButton>
            </IonItem>
            <IonGrid className="table">
              <IonRow>
                <IonCol>Id</IonCol>
                <IonCol>Documento</IonCol>
                <IonCol>Nombre</IonCol>
                <IonCol>Apellido Paterno</IonCol>
                <IonCol>Apellido Materno</IonCol>
                <IonCol>Email</IonCol>
                <IonCol>Acciones</IonCol>
              </IonRow>
              {empleados.map((empleado: Employee) =>
                <IonRow>
                  <IonCol>{empleado.id}</IonCol>
                  <IonCol>{empleado.documento}</IonCol>
                  <IonCol>{empleado.nombres}</IonCol>
                  <IonCol>{empleado.apellidoPaterno}</IonCol>
                  <IonCol>{empleado.apellidoMaterno}</IonCol>
                  <IonCol>{empleado.email}</IonCol>
                  <IonCol>
                    <IonButton color="primary" fill="clear"
                      onClick = {() => editEmployee(String(empleado.id))}>
                      <IonIcon icon={pencil} slot="icon-only" />
                    </IonButton>
                    <IonButton color="danger" fill="clear"
                      onClick={() => remove(String(empleado.id))}>
                      <IonIcon icon={close} slot="icon-only" />
                    </IonButton>
                  </IonCol>
                </IonRow>
              )}
            </IonGrid>
          </IonCard>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default EmployeeList;
