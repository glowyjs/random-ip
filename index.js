export default function randomIP() {
    return Math.floor(Math.random() * 255) + '.' + 
           Math.floor(Math.random() * 255) + '.' + 
           Math.floor(Math.random() * 255) + '.' + 
           Math.floor(Math.random() * 255);
};