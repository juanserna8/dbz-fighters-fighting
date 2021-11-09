function setAndRemoveAnimationClass(element, animationClass, timeOut = 500) {
        
    element.classList.add('animate__animated', animationClass);
    
    setTimeout(() => {
        element.classList.remove('animate__animated', animationClass)
    }, timeOut)
}

export {
    setAndRemoveAnimationClass
};