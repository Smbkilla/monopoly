import React from "react";
import styles from "./Board.module.css";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Field from "../Field/Field";
import colors from "../../constants/colors";
import fieldTypes from "../../constants/fieldType";

const player = name => ({
  name,
  icon: <AccountCircleIcon color="inherit" />,
  color: colors.PLAYER_COLORS.RED
});

const Board = () => {
  return (
    <Grid container direction="column">
      
      {/* prvi redak */}
      <Grid container direction="row" justify="space-around" alignContent="center" style={{marginBottom: 60, marginTop: 20}}>
        <div className={styles.boardCard}>
          <Field
            color={colors.BOARD_COLORS.GREEN}
            type={fieldTypes.PROPERTY}
            title="ULICA OVA I ONA"
            price="200K"
            players={[
              player("Player1", colors.PLAYER_COLORS.BLUE),
              player("Player2", colors.PLAYER_COLORS.BLUE),
              player("Player3", colors.PLAYER_COLORS.BLUE),
              player("Player4", colors.PLAYER_COLORS.BLUE)
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            color={colors.BOARD_COLORS.GREEN}
            type={fieldTypes.PROPERTY}
            title="ULICA OVA I ONA"
            price="200K"
            players={[
              player("Player1", colors.PLAYER_COLORS.BLUE),
              player("Player2", colors.PLAYER_COLORS.BLUE),
              player("Player3", colors.PLAYER_COLORS.BLUE),
              player("Player4", colors.PLAYER_COLORS.BLUE)
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            color={colors.BOARD_COLORS.GREEN}
            type={fieldTypes.PROPERTY}
            title="ULICA OVA I ONA"
            price="200K"
            players={[
              player("Player1", colors.PLAYER_COLORS.BLUE),
              player("Player2", colors.PLAYER_COLORS.BLUE),
              player("Player3", colors.PLAYER_COLORS.BLUE),
              player("Player4", colors.PLAYER_COLORS.BLUE)
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            color={colors.BOARD_COLORS.GREEN}
            type={fieldTypes.PROPERTY}
            title="ULICA OVA I ONA"
            price="200K"
            players={[
              player("Player1", colors.PLAYER_COLORS.BLUE),
              player("Player2", colors.PLAYER_COLORS.BLUE),
              player("Player3", colors.PLAYER_COLORS.BLUE),
              player("Player4", colors.PLAYER_COLORS.BLUE)
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            color={colors.BOARD_COLORS.GREEN}
            type={fieldTypes.PROPERTY}
            title="ULICA OVA I ONA"
            price="200K"
            players={[
              player("Player1", colors.PLAYER_COLORS.BLUE),
              player("Player2", colors.PLAYER_COLORS.BLUE),
              player("Player3", colors.PLAYER_COLORS.BLUE),
              player("Player4", colors.PLAYER_COLORS.BLUE)
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            color={colors.BOARD_COLORS.GREEN}
            type={fieldTypes.PROPERTY}
            title="ULICA OVA I ONA"
            price="200K"
            players={[
              player("Player1", colors.PLAYER_COLORS.BLUE),
              player("Player2", colors.PLAYER_COLORS.BLUE),
              player("Player3", colors.PLAYER_COLORS.BLUE),
              player("Player4", colors.PLAYER_COLORS.BLUE)
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            color={colors.BOARD_COLORS.GREEN}
            type={fieldTypes.PROPERTY}
            title="ULICA OVA I ONA"
            price="200K"
            players={[
              player("Player1", colors.PLAYER_COLORS.BLUE),
              player("Player2", colors.PLAYER_COLORS.BLUE),
              player("Player3", colors.PLAYER_COLORS.BLUE),
              player("Player4", colors.PLAYER_COLORS.BLUE)
            ]}
          />
        </div>
      </Grid>

      {/* drugi redak */}

      <Grid container direction="row" justify="space-around" alignContent="center" style={{marginBottom: 60, marginTop: 20}}>
        <div className={styles.boardCard}>
          <Field
            color={colors.BOARD_COLORS.GREEN}
            type={fieldTypes.PROPERTY}
            title="ULICA OVA I ONA"
            price="200K"
            players={[
              player("Player1", colors.PLAYER_COLORS.BLUE),
              player("Player2", colors.PLAYER_COLORS.BLUE),
              player("Player3", colors.PLAYER_COLORS.BLUE),
              player("Player4", colors.PLAYER_COLORS.BLUE)
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            color={colors.BOARD_COLORS.GREEN}
            type={fieldTypes.PROPERTY}
            title="ULICA OVA I ONA"
            price="200K"
            players={[
              player("Player1", colors.PLAYER_COLORS.BLUE),
              player("Player2", colors.PLAYER_COLORS.BLUE),
              player("Player3", colors.PLAYER_COLORS.BLUE),
              player("Player4", colors.PLAYER_COLORS.BLUE)
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            color={colors.BOARD_COLORS.GREEN}
            type={fieldTypes.PROPERTY}
            title="ULICA OVA I ONA"
            price="200K"
            players={[
              player("Player1", colors.PLAYER_COLORS.BLUE),
              player("Player2", colors.PLAYER_COLORS.BLUE),
              player("Player3", colors.PLAYER_COLORS.BLUE),
              player("Player4", colors.PLAYER_COLORS.BLUE)
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            color={colors.BOARD_COLORS.GREEN}
            type={fieldTypes.PROPERTY}
            title="ULICA OVA I ONA"
            price="200K"
            players={[
              player("Player1", colors.PLAYER_COLORS.BLUE),
              player("Player2", colors.PLAYER_COLORS.BLUE),
              player("Player3", colors.PLAYER_COLORS.BLUE),
              player("Player4", colors.PLAYER_COLORS.BLUE)
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            color={colors.BOARD_COLORS.GREEN}
            type={fieldTypes.PROPERTY}
            title="ULICA OVA I ONA"
            price="200K"
            players={[
              player("Player1", colors.PLAYER_COLORS.BLUE),
              player("Player2", colors.PLAYER_COLORS.BLUE),
              player("Player3", colors.PLAYER_COLORS.BLUE),
              player("Player4", colors.PLAYER_COLORS.BLUE)
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            color={colors.BOARD_COLORS.GREEN}
            type={fieldTypes.PROPERTY}
            title="ULICA OVA I ONA"
            price="200K"
            players={[
              player("Player1", colors.PLAYER_COLORS.BLUE),
              player("Player2", colors.PLAYER_COLORS.BLUE),
              player("Player3", colors.PLAYER_COLORS.BLUE),
              player("Player4", colors.PLAYER_COLORS.BLUE)
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            color={colors.BOARD_COLORS.GREEN}
            type={fieldTypes.PROPERTY}
            title="ULICA OVA I ONA"
            price="200K"
            players={[
              player("Player1", colors.PLAYER_COLORS.BLUE),
              player("Player2", colors.PLAYER_COLORS.BLUE),
              player("Player3", colors.PLAYER_COLORS.BLUE),
              player("Player4", colors.PLAYER_COLORS.BLUE)
            ]}
          />
        </div>
      </Grid>

      {/* treci redak */}

      <Grid container direction="row" justify="space-around" alignContent="center" style={{marginBottom: 60, marginTop: 20}}>
        <div className={styles.boardCard}>
          <Field
            color={colors.BOARD_COLORS.GREEN}
            type={fieldTypes.PROPERTY}
            title="ULICA OVA I ONA"
            price="200K"
            players={[
              player("Player1", colors.PLAYER_COLORS.BLUE),
              player("Player2", colors.PLAYER_COLORS.BLUE),
              player("Player3", colors.PLAYER_COLORS.BLUE),
              player("Player4", colors.PLAYER_COLORS.BLUE)
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            color={colors.BOARD_COLORS.GREEN}
            type={fieldTypes.PROPERTY}
            title="ULICA OVA I ONA"
            price="200K"
            players={[
              player("Player1", colors.PLAYER_COLORS.BLUE),
              player("Player2", colors.PLAYER_COLORS.BLUE),
              player("Player3", colors.PLAYER_COLORS.BLUE),
              player("Player4", colors.PLAYER_COLORS.BLUE)
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            color={colors.BOARD_COLORS.GREEN}
            type={fieldTypes.PROPERTY}
            title="ULICA OVA I ONA"
            price="200K"
            players={[
              player("Player1", colors.PLAYER_COLORS.BLUE),
              player("Player2", colors.PLAYER_COLORS.BLUE),
              player("Player3", colors.PLAYER_COLORS.BLUE),
              player("Player4", colors.PLAYER_COLORS.BLUE)
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            color={colors.BOARD_COLORS.GREEN}
            type={fieldTypes.PROPERTY}
            title="ULICA OVA I ONA"
            price="200K"
            players={[
              player("Player1", colors.PLAYER_COLORS.BLUE),
              player("Player2", colors.PLAYER_COLORS.BLUE),
              player("Player3", colors.PLAYER_COLORS.BLUE),
              player("Player4", colors.PLAYER_COLORS.BLUE)
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            color={colors.BOARD_COLORS.GREEN}
            type={fieldTypes.PROPERTY}
            title="ULICA OVA I ONA"
            price="200K"
            players={[
              player("Player1", colors.PLAYER_COLORS.BLUE),
              player("Player2", colors.PLAYER_COLORS.BLUE),
              player("Player3", colors.PLAYER_COLORS.BLUE),
              player("Player4", colors.PLAYER_COLORS.BLUE)
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            color={colors.BOARD_COLORS.GREEN}
            type={fieldTypes.PROPERTY}
            title="ULICA OVA I ONA"
            price="200K"
            players={[
              player("Player1", colors.PLAYER_COLORS.BLUE),
              player("Player2", colors.PLAYER_COLORS.BLUE),
              player("Player3", colors.PLAYER_COLORS.BLUE),
              player("Player4", colors.PLAYER_COLORS.BLUE)
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            color={colors.BOARD_COLORS.GREEN}
            type={fieldTypes.PROPERTY}
            title="ULICA OVA I ONA"
            price="200K"
            players={[
              player("Player1", colors.PLAYER_COLORS.BLUE),
              player("Player2", colors.PLAYER_COLORS.BLUE),
              player("Player3", colors.PLAYER_COLORS.BLUE),
              player("Player4", colors.PLAYER_COLORS.BLUE)
            ]}
          />
        </div>
      </Grid>

      {/* cetvrti redak */}

      <Grid container direction="row" justify="space-around" alignContent="center" style={{marginBottom: 60, marginTop: 20}}>
        <div className={styles.boardCard}>
          <Field
            color={colors.BOARD_COLORS.GREEN}
            type={fieldTypes.PROPERTY}
            title="ULICA OVA I ONA"
            price="200K"
            players={[
              player("Player1", colors.PLAYER_COLORS.BLUE),
              player("Player2", colors.PLAYER_COLORS.BLUE),
              player("Player3", colors.PLAYER_COLORS.BLUE),
              player("Player4", colors.PLAYER_COLORS.BLUE)
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            color={colors.BOARD_COLORS.GREEN}
            type={fieldTypes.PROPERTY}
            title="ULICA OVA I ONA"
            price="200K"
            players={[
              player("Player1", colors.PLAYER_COLORS.BLUE),
              player("Player2", colors.PLAYER_COLORS.BLUE),
              player("Player3", colors.PLAYER_COLORS.BLUE),
              player("Player4", colors.PLAYER_COLORS.BLUE)
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            color={colors.BOARD_COLORS.GREEN}
            type={fieldTypes.PROPERTY}
            title="ULICA OVA I ONA"
            price="200K"
            players={[
              player("Player1", colors.PLAYER_COLORS.BLUE),
              player("Player2", colors.PLAYER_COLORS.BLUE),
              player("Player3", colors.PLAYER_COLORS.BLUE),
              player("Player4", colors.PLAYER_COLORS.BLUE)
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            color={colors.BOARD_COLORS.GREEN}
            type={fieldTypes.PROPERTY}
            title="ULICA OVA I ONA"
            price="200K"
            players={[
              player("Player1", colors.PLAYER_COLORS.BLUE),
              player("Player2", colors.PLAYER_COLORS.BLUE),
              player("Player3", colors.PLAYER_COLORS.BLUE),
              player("Player4", colors.PLAYER_COLORS.BLUE)
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            color={colors.BOARD_COLORS.GREEN}
            type={fieldTypes.PROPERTY}
            title="ULICA OVA I ONA"
            price="200K"
            players={[
              player("Player1", colors.PLAYER_COLORS.BLUE),
              player("Player2", colors.PLAYER_COLORS.BLUE),
              player("Player3", colors.PLAYER_COLORS.BLUE),
              player("Player4", colors.PLAYER_COLORS.BLUE)
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            color={colors.BOARD_COLORS.GREEN}
            type={fieldTypes.PROPERTY}
            title="ULICA OVA I ONA"
            price="200K"
            players={[
              player("Player1", colors.PLAYER_COLORS.BLUE),
              player("Player2", colors.PLAYER_COLORS.BLUE),
              player("Player3", colors.PLAYER_COLORS.BLUE),
              player("Player4", colors.PLAYER_COLORS.BLUE)
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            color={colors.BOARD_COLORS.GREEN}
            type={fieldTypes.PROPERTY}
            title="ULICA OVA I ONA"
            price="200K"
            players={[
              player("Player1", colors.PLAYER_COLORS.BLUE),
              player("Player2", colors.PLAYER_COLORS.BLUE),
              player("Player3", colors.PLAYER_COLORS.BLUE),
              player("Player4", colors.PLAYER_COLORS.BLUE)
            ]}
          />
        </div>
      </Grid>

      {/* peti redak */}

      <Grid container direction="row" justify="space-around" alignContent="center" style={{marginBottom: 80, marginTop: 20}}>
        <div className={styles.boardCard}>
          <Field
            color={colors.BOARD_COLORS.GREEN}
            type={fieldTypes.PROPERTY}
            title="ULICA OVA I ONA"
            price="200K"
            players={[
              player("Player1", colors.PLAYER_COLORS.BLUE),
              player("Player2", colors.PLAYER_COLORS.BLUE),
              player("Player3", colors.PLAYER_COLORS.BLUE),
              player("Player4", colors.PLAYER_COLORS.BLUE)
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            color={colors.BOARD_COLORS.GREEN}
            type={fieldTypes.PROPERTY}
            title="ULICA OVA I ONA"
            price="200K"
            players={[
              player("Player1", colors.PLAYER_COLORS.BLUE),
              player("Player2", colors.PLAYER_COLORS.BLUE),
              player("Player3", colors.PLAYER_COLORS.BLUE),
              player("Player4", colors.PLAYER_COLORS.BLUE)
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            color={colors.BOARD_COLORS.GREEN}
            type={fieldTypes.PROPERTY}
            title="ULICA OVA I ONA"
            price="200K"
            players={[
              player("Player1", colors.PLAYER_COLORS.BLUE),
              player("Player2", colors.PLAYER_COLORS.BLUE),
              player("Player3", colors.PLAYER_COLORS.BLUE),
              player("Player4", colors.PLAYER_COLORS.BLUE)
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            color={colors.BOARD_COLORS.GREEN}
            type={fieldTypes.PROPERTY}
            title="ULICA OVA I ONA"
            price="200K"
            players={[
              player("Player1", colors.PLAYER_COLORS.BLUE),
              player("Player2", colors.PLAYER_COLORS.BLUE),
              player("Player3", colors.PLAYER_COLORS.BLUE),
              player("Player4", colors.PLAYER_COLORS.BLUE)
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            color={colors.BOARD_COLORS.GREEN}
            type={fieldTypes.PROPERTY}
            title="ULICA OVA I ONA"
            price="200K"
            players={[
              player("Player1", colors.PLAYER_COLORS.BLUE),
              player("Player2", colors.PLAYER_COLORS.BLUE),
              player("Player3", colors.PLAYER_COLORS.BLUE),
              player("Player4", colors.PLAYER_COLORS.BLUE)
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            color={colors.BOARD_COLORS.GREEN}
            type={fieldTypes.PROPERTY}
            title="ULICA OVA I ONA"
            price="200K"
            players={[
              player("Player1", colors.PLAYER_COLORS.BLUE),
              player("Player2", colors.PLAYER_COLORS.BLUE),
              player("Player3", colors.PLAYER_COLORS.BLUE),
              player("Player4", colors.PLAYER_COLORS.BLUE)
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            color={colors.BOARD_COLORS.GREEN}
            type={fieldTypes.PROPERTY}
            title="ULICA OVA I ONA"
            price="200K"
            players={[
              player("Player1", colors.PLAYER_COLORS.BLUE),
              player("Player2", colors.PLAYER_COLORS.BLUE),
              player("Player3", colors.PLAYER_COLORS.BLUE),
              player("Player4", colors.PLAYER_COLORS.BLUE)
            ]}
          />
        </div>
      </Grid>
    
    </Grid>
  );
};

export default Board;
