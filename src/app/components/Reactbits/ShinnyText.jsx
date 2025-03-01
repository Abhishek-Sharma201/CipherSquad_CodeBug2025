const ShinyText = ({ 
    text, 
    disabled = false, 
    speed = 5, 
    className = '' 
}) => {
    return (
        <div
            className={`text-[#b5b5b5] bg-clip-text inline-block ${disabled ? '' : 'animate-shine'} ${className}`}
            style={{
                backgroundImage: 'linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                color: 'transparent', // This ensures the text itself is transparent and only the gradient shows
                animationDuration: `${speed}s`,
            }}
        >
            {text}
        </div>
    );
};

export default ShinyText;
