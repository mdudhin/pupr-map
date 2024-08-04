interface PhotoCardProps {
  src: string;
  onImageClick?: (src: string) => void;
  description: string;
}

const PhotoCard: React.FC<PhotoCardProps> = ({
  src,
  onImageClick,
  description,
}) => {
  return (
    <div className="flex justify-center flex-col bg-white rounded-md cursor-pointer shadow-md">
      <img
        src={src}
        className="w-full h-auto rounded-t-md  cursor-pointer"
        alt={`Photo ${src}`}
        onClick={() => onImageClick && onImageClick(src)}
      />
      <div className="p-3">
        <label className="">{description}</label>
      </div>
    </div>
  );
};

export default PhotoCard;
