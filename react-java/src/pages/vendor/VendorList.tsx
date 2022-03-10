import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import Vendor from './Vendor';
import { removeVendor, searchVendors } from './VendorApi';

const VendorList: React.FC = (props: any) => {
  const { name } = useParams<{ name: string; }>();
  const [proveedores, setEmpleados] = useState<Vendor[]>([]);
  const history = useHistory();

  useEffect(() => {
    search();
  }, [history.location.pathname]);

  const search = () => {
    let result = searchVendors();
    setEmpleados(result);
  }

  const remove = (id: string) => {
    removeVendor(id);
    search();
  }

  const addVendor = () => {
    history.push('/page/Vendor/new');
  }

  const editVendor = (id:string) => {
    history.push('/page/Vendor/' + id);
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
            <IonTitle>Gestión de Proveedores</IonTitle>
            <IonItem>
              <IonButton onClick={addVendor} color="primary" fill="solid" slot="end" size="default">
                <IonIcon icon={add} />
                Agregar Proveedor
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
              {proveedores.map((proveedor: Vendor) =>
                <IonRow>
                  <IonCol>{proveedor.id}</IonCol>
                  <IonCol>{proveedor.documento}</IonCol>
                  <IonCol>{proveedor.nombres}</IonCol>
                  <IonCol>{proveedor.apellidoPaterno}</IonCol>
                  <IonCol>{proveedor.apellidoMaterno}</IonCol>
                  <IonCol>{proveedor.email}</IonCol>
                  <IonCol>
                    <IonButton color="primary" fill="clear"
                      onClick = {() => editVendor(String(proveedor.id))}>
                      <IonIcon icon={pencil} slot="icon-only" />
                    </IonButton>
                    <IonButton color="danger" fill="clear"
                      onClick={() => remove(String(proveedor.id))}>
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

export default VendorList;
