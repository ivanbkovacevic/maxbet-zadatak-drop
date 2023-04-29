/*
	Napraviti mini-library za drag & drop (D&D) koji u pozadini koristi context API.
	Implementacija treba da koristi HTML5 D&D API i da se ne oslanja na postojece D&D npm pakete.
	Sva logika (onDragStart, onDragEnd, onDragOver, itd.) treba da se nalazi u DragContext, DragArea i DragItem
	komponentama tako da nije izlozena korisniku library-a.
	
	U ovom slucaju event handler onDragStart trebao bi da bude na DragItem komponenti, dok bi
	onDrop i onDragOver trebali da budu na DragArea componenti. Te dvije komponente izmedju sebe
	trebaju da komuniciraju putem context API.
	
	Metode za komunikaciju mogu da se nalaze u DragContext ili DragArea komponenti.

	Pozeljno je napraviti stil za UserItem komponentu radi boljeg prikaza konacne aplikacije.
	
	Ispod je primjer komponente koja bi korista library na zeljeni nacin. Ukoliko ovakva struktura
	bude u browseru rezultovala renderovanju liste korisnika koja se moze sortirati, zadatak se smatra
	uspjesno zavrsenim.

	Za zadatak kreirati poseban projekat gdje ce sadrzaj App.tsx fajla biti ovaj fajl.
	
	Koristiti React i TypeScript..

	Puno srece ;-)
*/
import React, { useContext, useState, useEffect } from "react";

import users from "../users.json";
import DragArea, { WholeUser } from "./DragArea/DragArea";
import { DraggableContext } from "../context/DraggableContext";
import DragItem from "./DragItem";
import UserItem from "./UserItem/UserItem";

export const DraggableUserList = () => {
  const {
    state: { userGetOverIdx, userPickedIdx, itemDroped },
  } = useContext(DraggableContext);
  // Example
  const itemsString = JSON.stringify(users);
  const itemsParsed = JSON.parse(itemsString);

  const [exampleUsers, setExampleUsers] = useState<WholeUser[]>(itemsParsed);

  useEffect(() => {
    const newUsersList = [...exampleUsers];
    const userPickedIdxNum = parseInt(userPickedIdx);
    const userGetOverIdxNum = parseInt(userGetOverIdx);
    console.log("USERPICK", userPickedIdx, "GETOVER", userGetOverIdx);
    [newUsersList[userPickedIdxNum], newUsersList[userGetOverIdxNum]] = [
      newUsersList[userGetOverIdxNum],
      newUsersList[userPickedIdxNum],
    ];
    console.log({ newUsersList });
    setExampleUsers([...newUsersList]);
  }, [itemDroped]);

  return (
    <ul>
      <DragArea>
        {exampleUsers.map((user, i) => (
          <DragItem key={user.id} idx={i}>
            <UserItem name={user.firstName} email={user.email} />
          </DragItem>
        ))}
      </DragArea>
    </ul>
  );
};
