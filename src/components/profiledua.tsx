import { getImageUrl } from "@/utils/utils";


function Avatar({ person, size }) {
    return (
      <img
        className="avatar"
        src={getImageUrl(person.imageId, size)}
        alt={person.name}
        width={size}
        height={size}
      />
    );
  }
  
  export default function ProfileDua() {
    return (
      <Avatar 
      person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
      size={100}
      />
    );
  }