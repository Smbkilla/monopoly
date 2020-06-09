import React from "react";
import styles from "./Board.module.css";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

const Board = () => {
  return (
    <Grid container direction="column">
      <Grid container direction="row" justify="space-between">
        <div className={styles.boardCard}>
          <Card>Parking Kurac</Card>
        </div>
        <div className={styles.boardCard}>
          <Card>Parking Kurac</Card>
        </div>
        <div className={styles.boardCard}>
          <Card>Parking Kurac</Card>
        </div>
        <div className={styles.boardCard}>
          <Card>Parking Kurac</Card>
        </div>
        <div className={styles.boardCard}>
          <Card>Parking Kurac</Card>
        </div>
        <div className={styles.boardCard}>
          <Card>Parking Kurac</Card>
        </div>
        <div className={styles.boardCard}>
          <Card>Parking Kurac</Card>
        </div>
        <div className={styles.boardCard}>
          <Card>Parking Kurac</Card>
        </div>
        <div className={styles.boardCard}>
          <Card>Parking Kurac</Card>
        </div>
        <div className={styles.boardCard}>
          <Card>Parking Kurac</Card>
        </div>
        <div className={styles.boardCard}>
          <Card>Parking Kurac</Card>
        </div>
      </Grid>
      <Grid container direction="row" justify="space-between">
        <Grid item direction="column" xs={1} justify="space-around">
          <div className={styles.boardCard}>
            <Card>Parking Kurac</Card>
          </div>
          <div className={styles.boardCard}>
            <Card>Parking Kurac</Card>
          </div>
          <div className={styles.boardCard}>
            <Card>Parking Kurac</Card>
          </div>
          <div className={styles.boardCard}>
            <Card>Parking Kurac</Card>
          </div>
          <div className={styles.boardCard}>
            <Card>Parking Kurac</Card>
          </div>
          <div className={styles.boardCard}>
            <Card>Parking Kurac</Card>
          </div>
          <div className={styles.boardCard}>
            <Card>Parking Kurac</Card>
          </div>
          <div className={styles.boardCard}>
            <Card>Parking Kurac</Card>
          </div>
          <div className={styles.boardCard}>
            <Card>Parking Kurac</Card>
          </div>
        </Grid>
        <Grid item xs={10}>
          {/* ovdje ide modal */}
        </Grid>
        <Grid item direction="column" xs={1} justify="space-around">
          <div className={styles.boardCard}>
            <Card>Parking Kurac</Card>
          </div>
          <div className={styles.boardCard}>
            <Card>Parking Kurac</Card>
          </div>
          <div className={styles.boardCard}>
            <Card>Parking Kurac</Card>
          </div>
          <div className={styles.boardCard}>
            <Card>Parking Kurac</Card>
          </div>
          <div className={styles.boardCard}>
            <Card>Parking Kurac</Card>
          </div>
          <div className={styles.boardCard}>
            <Card>Parking Kurac</Card>
          </div>
          <div className={styles.boardCard}>
            <Card>Parking Kurac</Card>
          </div>
          <div className={styles.boardCard}>
            <Card>Parking Kurac</Card>
          </div>
          <div className={styles.boardCard}>
            <Card style={{ backgroundColor: "black" }}>Parking Kurac</Card>
          </div>
        </Grid>
      </Grid>
      <Grid container direction="row" justify="space-between">
        <div className={styles.boardCard}>
          <Card>Parking Kurac</Card>
        </div>
        <div className={styles.boardCard}>
          <Card>Parking Kurac</Card>
        </div>
        <div className={styles.boardCard}>
          <Card>Parking Kurac</Card>
        </div>
        <div className={styles.boardCard}>
          <Card>Parking Kurac</Card>
        </div>
        <div className={styles.boardCard}>
          <Card>Parking Kurac</Card>
        </div>
        <div className={styles.boardCard}>
          <Card>Parking Kurac</Card>
        </div>
        <div className={styles.boardCard}>
          <Card>Parking Kurac</Card>
        </div>
        <div className={styles.boardCard}>
          <Card>Parking Kurac</Card>
        </div>
        <div className={styles.boardCard}>
          <Card>Parking Kurac</Card>
        </div>
        <div className={styles.boardCard}>
          <Card>Parking Kurac</Card>
        </div>
        <div className={styles.boardCard}>
          <Card style={{ backgroundColor: "black" }}>Parking Kurac</Card>
        </div>
      </Grid>
    </Grid>
  );
};

export default Board;
