import ClassRoom from './0-classroom';

export default function initializeRooms() {
  let sizes = [new ClassRoom(19),
               new ClassRoom(20),
               new ClassRoom(34),
              ];
  return sizes;
}
