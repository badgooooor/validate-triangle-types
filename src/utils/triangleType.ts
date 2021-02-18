type TriangleProps = {
  a: number;
  b: number;
  c: number;
}

export const isTriangle = (triangle: TriangleProps) => {
  return (triangle.a + triangle.b > triangle.c)
    && (triangle.b + triangle.c > triangle.a)
    && (triangle.a + triangle.c > triangle.b);
}

export const isIsocelesTriangle = (triangle: TriangleProps) => {
  return (triangle.a === triangle.b) 
    || (triangle.b === triangle.c) 
    || (triangle.a === triangle.c); 
}

export const isEquilateralTriangle = (triangle: TriangleProps) => {
  return (triangle.a === triangle.b)
    && (triangle.b === triangle.c);
}

export const isScaleneTriangle = (triangle: TriangleProps) => {
  return (triangle.a !== triangle.b)
    && (triangle.b !== triangle.c)
    && (triangle.a !== triangle.c);
}

export const _pythagorean = (a: number, b: number, c: number) => {
  return Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2);
}

export const isRightTriangle = (triangle: TriangleProps) => {
  const { a, b, c } = triangle;
  return _pythagorean(a, b, c) || _pythagorean(b, a, c) || _pythagorean(c, a, b);
}

export const checkTriangleWrapper = (triangle: TriangleProps) => {
  if (isTriangle(triangle)) {
    const _right = isRightTriangle(triangle);
    const _scalene = isScaleneTriangle(triangle);
    const _iso = isIsocelesTriangle(triangle);
    const _equi = isEquilateralTriangle(triangle);
    
    if (_right) {
      return "Right Triangle";
    } else if (_equi) {
      return "Equilateral Triangle";
    } else if (_iso) {
      return "Isosceles Triangle";
    } else if (_scalene) {
      return "Scalene Triangle";
    }
  } else {
    return "Error";
  }
  return '';
}
