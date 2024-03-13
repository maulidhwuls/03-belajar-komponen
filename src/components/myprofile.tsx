import { getImageUrlV2 } from '@/utils/utils';

function MyAvatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrlV2(person, 'b')}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function MyProfile() {
  return (
    <MyAvatar
      size={100}
      person={{ 
        name: 'Gregorio Y. Zara', 
        imageId: '7vQD0fP'
      }}
    />
  );
}