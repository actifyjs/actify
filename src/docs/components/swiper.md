---
title: Swiper
---

# Swiper

> Swiper is simple banner slider with a lot of features.

## Usage

<usage name="swiper"></usage>


## Custom Arrows

<code-preview code='() => {
	const items = [{
	   title: "Swiper 1",
	   src: "https://images.unsplash.com/photo-1691977504044-fa2e8c813431?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=8"
 	},
 	{
	   title: "Swiper 2",
	   src: "https://images.unsplash.com/photo-1691763731792-c5ee77f9112a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1524&q=80"
 	},
 	{
	   title: "Swiper 3",
	   src: "https://images.unsplash.com/photo-1653916986137-996184bc4af0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
 	}]
  return (
	  <Swiper
	  	className="h-[320px]"
	  	autoPlay 
		prevArrow={({ prev }) => (
	        <IconButton
	          color="red"
	          onClick={prev}
	          className="absolute top-2/4 left-4 -translate-y-2/4"
	        >
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3" class="-ml-1 h-7 w-7"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
	        </IconButton>
	      )} 
	    nextArrow={({ next }) => (
	        <IconButton
	          color="red"
	          onClick={next}
	          className="absolute top-2/4 !right-4 -translate-y-2/4"
	        >
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3" class="ml-1 h-7 w-7"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
	        </IconButton>
	      )}>
	   {items.map((item, index) => (
	     <Swiper.Item key={index}>
	       <img
	         src={item.src}
	         alt={item.title}
	         className="h-full w-full object-cover"
	       />
	     </Swiper.Item>
	   ))}
	 </Swiper>
  )
} '>
</code-preview>

## Custom Navigation
<code-preview code='() => {
	const items = [{
	   title: "Swiper 1",
	   src: "https://images.unsplash.com/photo-1691977504044-fa2e8c813431?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=8"
 	},
 	{
	   title: "Swiper 2",
	   src: "https://images.unsplash.com/photo-1691763731792-c5ee77f9112a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1524&q=80"
 	},
 	{
	   title: "Swiper 3",
	   src: "https://images.unsplash.com/photo-1653916986137-996184bc4af0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
 	}]
  return (
	  <Swiper
	  	className="h-[320px]"
	  	autoPlay
		navigation={({ setCurrent, current, count }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {[...Array(count)].map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all ${
                current === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      )}
	  	>
	   {items.map((item, index) => (
	     <Swiper.Item key={index}>
	       <img
	         src={item.src}
	         alt={item.title}
	         className="h-full w-full object-cover"
	       />
	     </Swiper.Item>
	   ))}
	 </Swiper>
  )
} '>
</code-preview>


## Props

| Props      | Type               | Description                                                 | Default |
| ---------- | ------------------ | ----------------------------------------------------------- | ------- |
| autoPlay   | `boolean`          | Sets the autoplay mode for carousel                         | `false` |
| current    | `number`           | Sets carousel start play index                              | `0`     |
| interval   | `number`           | Sets the interval duration for autoplay mode in miliseconds | `3000`  |
| `children` | `React.React.Node` |                                                             | `null`  |

## Slot

| Name | Description |
| ---- | ----------- |
| Item | Swiper item |
