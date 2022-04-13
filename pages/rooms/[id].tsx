import { useRouter } from "next/router";
import React from "react";
import { Api } from "../../api";
import { BackButton } from "../../components/BackButton";
import { Header } from "../../components/Header";
import { Room } from "../../components/Room";
import { Axios } from "../../core/axios";

export default function RoomPage({ room }) {
   const router = useRouter();
   const { id } = router.query;

   return (
      <>
         <Header />
         <div className="container mt-30">
            <BackButton title={"All rooms"} href={"/rooms"} />
            <Room title={room.title} />
         </div>
      </>
   );
}

export const getServerSideProps = async (ctx) => {
   try {
      const roomId = ctx.query.id;
      const room = await Api(ctx).getRoom(roomId);
      return {
         props: {
            room,
         },
      };
   } catch (error) {
      console.log("Ошибка в [id].tsx");
      return {
         props: {},
         redirect: {
            destination: "/rooms",
            permanent: false,
         },
      };
   }
};
