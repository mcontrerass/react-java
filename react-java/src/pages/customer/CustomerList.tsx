import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, close, pencil, sync } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import Customer from './Customer';
import { removeCustomer, saveCustomer, searchCustomers } from './CustomerApi';

const CustomerList: React.FC = (props: any) => {
  const { name } = useParams<{ name: string; }>();
  const [clientes, setClientes] = useState<Customer[]>([]);
  const history = useHistory();

  useEffect(() => {
    search();
  }, [history.location.pathname]);

  const search = async () => {
    let result = await searchCustomers();
    setClientes(result);
  }

  const remove = async (id: string) => {
    await removeCustomer(id);
    search();
  }

  const addCustomer = () => {
    history.push('/page/customer/new');
  }

  const editCustomer = (id:string) => {
    history.push('/page/customer/' + id);
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
            <IonTitle>Gestión de Clientes</IonTitle>
            <IonItem>
              <IonButton onClick={addCustomer} color="primary" fill="solid" slot="end" size="default">
                <IonIcon icon={add} />
                Agregar Cliente
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
              {clientes.map((cliente: Customer) =>
                <IonRow>
                  <IonCol>{cliente.id}</IonCol>
                  <IonCol>{cliente.documento}</IonCol>
                  <IonCol>{cliente.nombres}</IonCol>
                  <IonCol>{cliente.apellidoPaterno}</IonCol>
                  <IonCol>{cliente.apellidoMaterno}</IonCol>
                  <IonCol>{cliente.email}</IonCol>
                  <IonCol>
                    <IonButton color="primary" fill="clear"
                      onClick = {() => editCustomer(String(cliente.id))}>
                      <IonIcon icon={pencil} slot="icon-only" />
                    </IonButton>
                    <IonButton color="danger" fill="clear"
                      onClick={() => remove(String(cliente.id))}>
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

export default CustomerList;
