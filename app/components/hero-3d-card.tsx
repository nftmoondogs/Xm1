import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export function Hero3DCard() {
  return (
    <CardContainer className="inter-var px-4">
     

        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={360}
          className="w-full mt-4"
        >
          <img
            src="https://i.ibb.co/Mg2n71t/logo.gif"
            height="1000"
            width="1000"
            className="h-100 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />

        </CardItem>

    </CardContainer>
  );
}
