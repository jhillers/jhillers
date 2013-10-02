
int numItems = 10;
int MIN_RADIUS = 100;
int MAX_RADIUS = 230;
int RED = int(random(255));
Circle[] circles = new Circle[numItems];
int speed = 0.2;
Timer timer;

void setup()
{
  size (940, 150);
  colorMode(HSB, 360, 100, 100);
  noStroke();
  frameRate(22);
  timer = new Timer(25000);
  for (int i = 0; i< numItems;i++)
  {
    circles[i] = new Circle(random(width), random(height), random(100));
    applyRedToCircle(i);
  }
}
void draw()
{
  background(#424242); 
  for (int i = 0; i< numItems;i++)
  {
    circles[i].update();
  }
  if (timer.timeIsUp())
  {
    timer.reset();
    RED = int((random(255))); 
    for (int i = 0; i< numItems;i++)
    {
      applyRedToCircle(i);
    }
  }
}
void applyRedToCircle(int index)
{
  RED = (RED + 8) % 360;    
  circles[index].setRed(RED);
}

class Timer {
  int _savedTime; 
  int _totalTime;
  Timer(int time)
  {
    reset();
    _totalTime = time;
  }
  Boolean timeIsUp()
  {
    return (millis() - _savedTime) >= _totalTime;
  }
  void reset()
  {
    _savedTime = millis();
  }
}
class Circle {

  float _speedX; 
  float _speedY; 
  int _x;
  int _y;
  int _r =-1; 
  int _alpha;
  int _radius;
  int _targetRed;
  float delta = random(-1, 1);
  Circle(int x, int y, int alpha)
  {
    setRadius();
    _x = x;
    _y = y;
    _alpha = alpha;
  }
  void update() {
    Boolean transparent = (_alpha <= 0)
      delta = transparent ? random(0.1, 1) : (_alpha >= 100) ? random(-1, -0.1): delta;
    if (transparent)
    {
      _x = random(0, width);
      _y = random(0, height);
      setSpeed();
      setRadius();
    }

    if (_r != _targetRed)
    {
      var distance = (_r - _targetRed);
      var delta = distance/abs(distance);
      _r += (delta *-1);
    }
    _alpha = Math.min(_alpha, 100);
    _alpha = Math.max(_alpha, 0);

    color col = color(_r, 90, 90, _alpha+= delta);
    fill(col);
    ellipse(_x +=_speedX, _y +=_speedY, _radius, _radius);
  }
  void setSpeed()
  {
    _speedX = random(-speed, speed); 
    _speedY = random(-speed, speed);
  }
  void setRadius() 
  {
    _radius = random(MIN_RADIUS, MAX_RADIUS);
  }
  void setRed(int r)
  {
    if (_r < 0)
    {
      _r = r;
    }
    _targetRed = r;
  }
}


