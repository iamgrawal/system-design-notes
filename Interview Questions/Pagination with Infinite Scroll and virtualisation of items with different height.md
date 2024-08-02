
```tsx
import React, { useState, useEffect, useRef, useCallback } from 'react';

  

interface Item {

  id: number;

  title: string;

  height: number;

}

  

const WINDOW_HEIGHT = 400;

const BUFFER_SIZE = 5;

const PAGE_SIZE = 20;

  

const InfiniteScrollList: React.FC = () => {

  const [items, setItems] = useState<Item[]>([]);

  const [startIndex, setStartIndex] = useState(0);

  const [hasNextPage, setHasNextPage] = useState(true);

  const [isLoading, setIsLoading] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  

  const loadMoreItems = useCallback(async () => {

    if (isLoading || !hasNextPage) return;

  

    setIsLoading(true);

    // Simulating an API call

    await new Promise(resolve => setTimeout(resolve, 1000));

    const newItems: Item[] = [];

    for (let i = items.length; i < items.length + PAGE_SIZE; i++) {

      newItems.push({ 

        id: i, 

        title: `Item ${i + 1}`, 

        height: Math.floor(Math.random() * 50) + 50 // Random height between 50 and 100

      });

    }

    setItems(prevItems => [...prevItems, ...newItems]);

    setHasNextPage(items.length + newItems.length < 100); // For demo, we'll stop at 100 items

    setIsLoading(false);

  }, [items.length, isLoading, hasNextPage]);

  

  const getItemOffset = useCallback((index: number) => {

    return items.slice(0, index).reduce((sum, item) => sum + item.height, 0);

  }, [items]);

  

  const handleScroll = useCallback(() => {

    if (!containerRef.current) return;

  

    const { scrollTop, clientHeight, scrollHeight } = containerRef.current;

    const bottomOffset = scrollHeight - (scrollTop + clientHeight);

  

    if (bottomOffset < 100) { // Load more when within 100px of the bottom

      loadMoreItems();

    }

  

    let newStartIndex = 0;

    let totalHeight = 0;

    for (let i = 0; i < items.length; i++) {

      if (totalHeight > scrollTop) {

        newStartIndex = i;

        break;

      }

      totalHeight += items[i].height;

    }

    setStartIndex(newStartIndex);

  }, [loadMoreItems, items]);

  

  useEffect(() => {

    loadMoreItems();

  }, []);

  

  useEffect(() => {

    const container = containerRef.current;

    if (container) {

      container.addEventListener('scroll', handleScroll);

      return () => container.removeEventListener('scroll', handleScroll);

    }

  }, [handleScroll]);

  

  const totalHeight = items.reduce((sum, item) => sum + item.height, 0);

  

  const visibleItems: Item[] = [];

  let visibleHeight = 0;

  let i = startIndex;

  while (visibleHeight < WINDOW_HEIGHT && i < items.length) {

    visibleItems.push(items[i]);

    visibleHeight += items[i].height;

    i++;

  }

  

  return (

    <div 

      ref={containerRef}

      style={{ height: WINDOW_HEIGHT, overflowY: 'auto', border: '1px solid #ccc' }}

    >

      <div style={{ height: totalHeight, position: 'relative' }}>

        {visibleItems.map((item) => (

          <div

            key={item.id}

            style={{

              position: 'absolute',

              top: getItemOffset(items.indexOf(item)),

              left: 0,

              right: 0,

              height: item.height,

              display: 'flex',

              alignItems: 'center',

              padding: '0 10px',

              borderBottom: '1px solid #eee'

            }}

          >

            {item.title}

          </div>

        ))}

      </div>

      {isLoading && <div style={{ textAlign: 'center', padding: '10px' }}>Loading...</div>}

    </div>

  );

};

  

export default InfiniteScrollList;
```