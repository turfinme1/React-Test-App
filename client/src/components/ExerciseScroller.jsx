import styles from './ExerciseScroller.module.css'

export default function ExerciseScroller(){
  const handleScroll = (event) => {
    const container = event.target;
    const scrollAmount = event.deltaY;
    container.scrollTo({
      top: 0,
      left: container.scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <header>{/* Header content */}</header>
      <div className={styles.container} onWheel={handleScroll}>
        <div className={styles.item}>Yoo</div>
        <div className={styles.item}>Yoo4</div>
        <div className={styles.item}>$ooo</div>
        <div className={styles.item}>$ooo</div>
        <div className={styles.item}>$ooo</div>
        <div className={styles.item}>$ooo</div>
        <div className={styles.item}>$ooo</div>
        <div className={styles.item}>$ooo</div>
        <div className={styles.item}>$ooo</div>
        <div className={styles.item}>$ooo</div>
        <div className={styles.item}>$ooo</div>
        <div className={styles.item}>$ooo</div>
        <div className={styles.item}>$ooo</div>
        <div className={styles.item}>$ooo</div>
        <div className={styles.item}>$ooo</div>
      </div>
      <footer>{/* Footer content */}</footer>
    </div>
  );
}