import equilateral from '../assets/equilateral.png';
import scalene from '../assets/scalene.png';
import isosceles from '../assets/isosceles.png';
import right from '../assets/right.png';

function TriangleType({ result }: any) {
  function imageSrc() {
    switch(result) {
      case "Right Triangle":
        return right;
      case "Equilateral Triangle":
        return equilateral;
      case "Isosceles Triangle":
        return isosceles;
      case "Scalene Triangle":
        return scalene;
    }
  }
  return (
    <div>
      {
        imageSrc() !== 'Error' &&
        <img src={imageSrc()} alt="Triangle" width={300} height={300} />
      }
    </div>
  );
}

export default TriangleType;