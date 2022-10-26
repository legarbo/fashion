import { useNavigate } from 'react-router-dom';
import './directory-item.styles.scss';

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, styles } = category;

  const navigate = useNavigate();
  const navigationHandler = () => navigate(`shop/${title}`);

  return (
    <div className={styles.join(' ')}>
      <div 
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`    
        }}
      />
      <div className='body' onClick={navigationHandler}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;      
