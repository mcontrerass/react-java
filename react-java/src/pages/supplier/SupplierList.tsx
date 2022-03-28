import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import Supplier from './Supplier';
import { removeSupplier, searchSuppliers } from './SupplierApi';

const SupplierList: React.FC = (props: any) => {
  const { name } = useParams<{ name: string; }>();
  const [proveedores, setProveedores] = useState<Supplier[]>([]);
  const history = useHistory();

  useEffect(() => {
    search();
  }, [history.location.pathname]);

  const search = async () => {
    let result = await searchSuppliers();
    setProveedores(result);
  }

  const remove = async (id: string) => {
    await removeSupplier(id);
    search();
  }

  const addSupplier = () => {
    history.push('/page/Supplier/new');
  }

  const editSupplier = (id:string) => {
    history.push('/page/Supplier/' + id);
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
              <IonButton onClick={addSupplier} color="primary" fill="solid" slot="end" size="default">
                <IonIcon icon={add} />
                Agregar Proveedor
              </IonButton>
            </IonItem>
            <IonGrid className="table">
              <IonRow>
                <IonCol>Id</IonCol>
                <IonCol>Documento</IonCol>
                <IonCol>Nombre</IonCol>
                <IonCol>Telefono</IonCol>
                <IonCol>Web</IonCol>
                <IonCol>Email</IonCol>
                <IonCol>Representante</IonCol>
                <IonCol>Acciones</IonCol>
              </IonRow>
              {proveedores.map((proveedor: Supplier) =>
                <IonRow>
                  <IonCol>{proveedor.id}</IonCol>
                  <IonCol>{proveedor.documento}</IonCol>
                  <IonCol>{proveedor.nombre}</IonCol>
                  <IonCol>{proveedor.telefono}</IonCol>
                  <IonCol>{proveedor.web}</IonCol>
                  <IonCol>{proveedor.email}</IonCol>
                  <IonCol>{proveedor.representante}</IonCol>
                  <IonCol>
                    <IonButton color="primary" fill="clear"
                      onClick = {() => editSupplier(String(proveedor.id))}>
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

export default SupplierList;
