import { useState, useEffect, useCallback } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface Position {
  x: number;
  y: number;
}

type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';
type GameState = 'WAITING' | 'PLAYING' | 'GAME_OVER';

const BOARD_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_FOOD = { x: 15, y: 15 };
const GAME_SPEED = 150;

export const SnakeGame = () => {
  const [snake, setSnake] = useState<Position[]>(INITIAL_SNAKE);
  const [food, setFood] = useState<Position>(INITIAL_FOOD);
  const [direction, setDirection] = useState<Direction>('RIGHT');
  const [gameState, setGameState] = useState<GameState>('WAITING');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    const saved = localStorage.getItem('snake-high-score');
    return saved ? parseInt(saved) : 0;
  });

  const generateFood = useCallback((currentSnake: Position[]): Position => {
    let newFood: Position;
    do {
      newFood = {
        x: Math.floor(Math.random() * BOARD_SIZE),
        y: Math.floor(Math.random() * BOARD_SIZE),
      };
    } while (currentSnake.some(segment => segment.x === newFood.x && segment.y === newFood.y));
    return newFood;
  }, []);

  const resetGame = useCallback(() => {
    setSnake(INITIAL_SNAKE);
    setFood(INITIAL_FOOD);
    setDirection('RIGHT');
    setScore(0);
    setGameState('WAITING');
  }, []);

  const startGame = useCallback(() => {
    setGameState('PLAYING');
    toast.success('Game started! Use arrow keys or WASD to move');
  }, []);

  const gameOver = useCallback(() => {
    setGameState('GAME_OVER');
    const newHighScore = Math.max(score, highScore);
    setHighScore(newHighScore);
    localStorage.setItem('snake-high-score', newHighScore.toString());
    toast.error(`Game Over! Score: ${score}`);
  }, [score, highScore]);

  const moveSnake = useCallback(() => {
    if (gameState !== 'PLAYING') return;

    setSnake(currentSnake => {
      const newSnake = [...currentSnake];
      const head = { ...newSnake[0] };

      // Move head based on direction
      switch (direction) {
        case 'UP':
          head.y -= 1;
          break;
        case 'DOWN':
          head.y += 1;
          break;
        case 'LEFT':
          head.x -= 1;
          break;
        case 'RIGHT':
          head.x += 1;
          break;
      }

      // Handle wall wrapping instead of collision
      if (head.x < 0) {
        head.x = BOARD_SIZE - 1;
      } else if (head.x >= BOARD_SIZE) {
        head.x = 0;
      }
      
      if (head.y < 0) {
        head.y = BOARD_SIZE - 1;
      } else if (head.y >= BOARD_SIZE) {
        head.y = 0;
      }

      // Check self collision
      if (newSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
        gameOver();
        return currentSnake;
      }

      newSnake.unshift(head);

      // Check food collision
      if (head.x === food.x && head.y === food.y) {
        setScore(prev => prev + 10);
        setFood(generateFood(newSnake));
        toast.success('+10 points!');
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [direction, food, gameState, gameOver, generateFood]);

  // Game loop
  useEffect(() => {
    if (gameState === 'PLAYING') {
      const gameInterval = setInterval(moveSnake, GAME_SPEED);
      return () => clearInterval(gameInterval);
    }
  }, [moveSnake, gameState]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (gameState === 'WAITING') {
        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'w', 'a', 's', 'd'].includes(e.key)) {
          startGame();
        }
        return;
      }

      if (gameState !== 'PLAYING') return;

      switch (e.key) {
        case 'ArrowUp':
        case 'w':
          if (direction !== 'DOWN') setDirection('UP');
          break;
        case 'ArrowDown':
        case 's':
          if (direction !== 'UP') setDirection('DOWN');
          break;
        case 'ArrowLeft':
        case 'a':
          if (direction !== 'RIGHT') setDirection('LEFT');
          break;
        case 'ArrowRight':
        case 'd':
          if (direction !== 'LEFT') setDirection('RIGHT');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [direction, gameState, startGame]);

  return (
    <div className="flex flex-col items-center gap-6 p-4">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-6xl font-bold neon-text mb-2">SNAKE</h1>
        <div className="flex gap-8 text-xl">
          <span className="text-primary">Score: {score}</span>
          <span className="text-accent">High Score: {highScore}</span>
        </div>
      </div>

      {/* Game Board */}
      <Card className="p-4 game-board">
        <div 
          className="grid gap-[1px] bg-muted/20"
          style={{
            gridTemplateColumns: `repeat(${BOARD_SIZE}, 1fr)`,
            width: '400px',
            height: '400px',
          }}
        >
          {Array.from({ length: BOARD_SIZE * BOARD_SIZE }).map((_, index) => {
            const x = index % BOARD_SIZE;
            const y = Math.floor(index / BOARD_SIZE);
            
            const isSnake = snake.some(segment => segment.x === x && segment.y === y);
            const isFood = food.x === x && food.y === y;
            const isHead = snake[0]?.x === x && snake[0]?.y === y;

            return (
              <div
                key={index}
                className={`
                  aspect-square transition-all duration-75
                  ${isSnake ? 'snake-segment' : ''}
                  ${isFood ? 'food' : ''}
                  ${isHead ? 'ring-2 ring-primary/50' : ''}
                `}
              />
            );
          })}
        </div>
      </Card>

      {/* Game Controls */}
      <div className="text-center space-y-4">
        {gameState === 'WAITING' && (
          <div className="space-y-2">
            <p className="text-muted-foreground">Press any arrow key or WASD to start</p>
            <Button onClick={startGame} className="game-button px-8 py-2">
              Start Game
            </Button>
          </div>
        )}
        
        {gameState === 'PLAYING' && (
          <p className="text-muted-foreground">Use arrow keys or WASD to move</p>
        )}
        
        {gameState === 'GAME_OVER' && (
          <div className="space-y-2">
            <p className="text-destructive text-xl font-bold">Game Over!</p>
            <p className="text-muted-foreground">Final Score: {score}</p>
            <Button onClick={resetGame} className="game-button px-8 py-2">
              Play Again
            </Button>
          </div>
        )}
      </div>

      {/* Instructions */}
      <Card className="p-4 max-w-md text-center text-sm text-muted-foreground">
        <p className="mb-2">How to play:</p>
        <p>• Use arrow keys or WASD to control the snake</p>
        <p>• Eat the red food to grow and score points</p>
        <p>• Snake wraps around when it reaches the edges</p>
        <p>• Avoid hitting your own tail</p>
      </Card>
    </div>
  );
};