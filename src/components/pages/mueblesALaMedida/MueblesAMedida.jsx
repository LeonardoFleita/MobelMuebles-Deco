import MueblesAMedidaArticle from "./mueblesAMedidaArticle/MueblesAMedidaArticle";
import SillaGris from "../../common/sillaGris/SillaGris";
import { mueblesAMedidaCarouselesData } from "./mueblesAMedidaCarouselesData";
import MueblesAMedidaHeader from "./MueblesAMedidaHeader/MueblesAMedidaHeader";

const MueblesAMedida = () => {
  return (
    <main className="mueblesAMedida">
      <MueblesAMedidaHeader />
      {mueblesAMedidaCarouselesData.map((el) => (
        <MueblesAMedidaArticle
          key={el.id}
          title={el.title}
          text={el.text}
          images={el.images}
          alt={el.alt}
        />
      ))}
      <SillaGris />
    </main>
  );
};

export default MueblesAMedida;
