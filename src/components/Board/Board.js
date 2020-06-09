import React from "react";
import styles from "./Board.module.css";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Field from "../Field/Field";
import colors from "../../constants/colors";
import orientation from "../../constants/orientation";

const player = name => ({
  name,
  icon: <AccountCircleIcon color="inherit" />,
  color: colors.PLAYER_COLORS.RED
});

const Board = () => {
  return (
    <Grid container direction="column">
      <Grid
        container
        direction="row"
        justify="center"
        alignContent="center"
      >
        <div className={styles.boardCard}>
          <Field
            backgroundColor={colors.BOARD_COLORS.GREEN}
            orientation={orientation.BOTTOM}
            title="ULICA OVA I ONA 1"
            price="200K"
            players={[
              player("Player1"),
              player("Player2"),
              player("Player3"),
              player("Player4")
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            backgroundColor={colors.BOARD_COLORS.GREEN}
            orientation={orientation.BOTTOM}
            title="ULICA OVA I ONA 2"
            price="200K"
            players={[
              player("Player1"),
              player("Player2"),
              player("Player3"),
              player("Player4")
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            backgroundColor={colors.BOARD_COLORS.GREEN}
            orientation={orientation.BOTTOM}
            title="ULICA OVA I ONA 3"
            price="200K"
            players={[
              player("Player1"),
              player("Player2"),
              player("Player3"),
              player("Player4")
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            backgroundColor={colors.BOARD_COLORS.GREEN}
            orientation={orientation.BOTTOM}
            title="ULICA OVA I ONA 5"
            price="200K"
            players={[
              player("Player1"),
              player("Player2"),
              player("Player3"),
              player("Player4")
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            backgroundColor={colors.BOARD_COLORS.GREEN}
            orientation={orientation.BOTTOM}
            title="ULICA OVA I ONA 6"
            price="200K"
            players={[
              player("Player1"),
              player("Player2"),
              player("Player3"),
              player("Player4")
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            backgroundColor={colors.BOARD_COLORS.GREEN}
            orientation={orientation.BOTTOM}
            title="ULICA OVA I ONA 7"
            price="200K"
            players={[
              player("Player1"),
              player("Player2"),
              player("Player3"),
              player("Player4")
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            backgroundColor={colors.BOARD_COLORS.GREEN}
            orientation={orientation.BOTTOM}
            title="ULICA OVA I ONA 8"
            price="200K"
            players={[
              player("Player1"),
              player("Player2"),
              player("Player3"),
              player("Player4")
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            backgroundColor={colors.BOARD_COLORS.GREEN}
            orientation={orientation.BOTTOM}
            title="ULICA OVA I ONA 9"
            price="200K"
            players={[
              player("Player1"),
              player("Player2"),
              player("Player3"),
              player("Player4")
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            backgroundColor={colors.BOARD_COLORS.GREEN}
            orientation={orientation.BOTTOM}
            title="ULICA OVA I ONA 10"
            price="200K"
            players={[
              player("Player1"),
              player("Player2"),
              player("Player3"),
              player("Player4")
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            backgroundColor={colors.BOARD_COLORS.GREEN}
            orientation={orientation.BOTTOM}
            title="ULICA OVA I ONA 11"
            price="200K"
            players={[
              player("Player1"),
              player("Player2"),
              player("Player3"),
              player("Player4")
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            backgroundColor={colors.BOARD_COLORS.GREEN}
            orientation={orientation.BOTTOM}
            title="ULICA OVA I ONA 12"
            price="200K"
            players={[
              player("Player1"),
              player("Player2"),
              player("Player3"),
              player("Player4")
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            backgroundColor={colors.BOARD_COLORS.GREEN}
            orientation={orientation.BOTTOM}
            title="ULICA OVA I ONA 1"
            price="200K"
            players={[
              player("Player1"),
              player("Player2"),
              player("Player3"),
              player("Player4")
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            backgroundColor={colors.BOARD_COLORS.GREEN}
            orientation={orientation.BOTTOM}
            title="ULICA OVA I ONA 2"
            price="200K"
            players={[
              player("Player1"),
              player("Player2"),
              player("Player3"),
              player("Player4")
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            backgroundColor={colors.BOARD_COLORS.GREEN}
            orientation={orientation.BOTTOM}
            title="ULICA OVA I ONA 3"
            price="200K"
            players={[
              player("Player1"),
              player("Player2"),
              player("Player3"),
              player("Player4")
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            backgroundColor={colors.BOARD_COLORS.GREEN}
            orientation={orientation.BOTTOM}
            title="ULICA OVA I ONA 5"
            price="200K"
            players={[
              player("Player1"),
              player("Player2"),
              player("Player3"),
              player("Player4")
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            backgroundColor={colors.BOARD_COLORS.GREEN}
            orientation={orientation.BOTTOM}
            title="ULICA OVA I ONA 6"
            price="200K"
            players={[
              player("Player1"),
              player("Player2"),
              player("Player3"),
              player("Player4")
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            backgroundColor={colors.BOARD_COLORS.GREEN}
            orientation={orientation.BOTTOM}
            title="ULICA OVA I ONA 7"
            price="200K"
            players={[
              player("Player1"),
              player("Player2"),
              player("Player3"),
              player("Player4")
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            backgroundColor={colors.BOARD_COLORS.GREEN}
            orientation={orientation.BOTTOM}
            title="ULICA OVA I ONA 8"
            price="200K"
            players={[
              player("Player1"),
              player("Player2"),
              player("Player3"),
              player("Player4")
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            backgroundColor={colors.BOARD_COLORS.GREEN}
            orientation={orientation.BOTTOM}
            title="ULICA OVA I ONA 9"
            price="200K"
            players={[
              player("Player1"),
              player("Player2"),
              player("Player3"),
              player("Player4")
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            backgroundColor={colors.BOARD_COLORS.GREEN}
            orientation={orientation.BOTTOM}
            title="ULICA OVA I ONA 10"
            price="200K"
            players={[
              player("Player1"),
              player("Player2"),
              player("Player3"),
              player("Player4")
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            backgroundColor={colors.BOARD_COLORS.GREEN}
            orientation={orientation.BOTTOM}
            title="ULICA OVA I ONA 5"
            price="200K"
            players={[
              player("Player1"),
              player("Player2"),
              player("Player3"),
              player("Player4")
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            backgroundColor={colors.BOARD_COLORS.GREEN}
            orientation={orientation.BOTTOM}
            title="ULICA OVA I ONA 6"
            price="200K"
            players={[
              player("Player1"),
              player("Player2"),
              player("Player3"),
              player("Player4")
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            backgroundColor={colors.BOARD_COLORS.GREEN}
            orientation={orientation.BOTTOM}
            title="ULICA OVA I ONA 7"
            price="200K"
            players={[
              player("Player1"),
              player("Player2"),
              player("Player3"),
              player("Player4")
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            backgroundColor={colors.BOARD_COLORS.GREEN}
            orientation={orientation.BOTTOM}
            title="ULICA OVA I ONA 8"
            price="200K"
            players={[
              player("Player1"),
              player("Player2"),
              player("Player3"),
              player("Player4")
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            backgroundColor={colors.BOARD_COLORS.GREEN}
            orientation={orientation.BOTTOM}
            title="ULICA OVA I ONA 9"
            price="200K"
            players={[
              player("Player1"),
              player("Player2"),
              player("Player3"),
              player("Player4")
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            backgroundColor={colors.BOARD_COLORS.GREEN}
            orientation={orientation.BOTTOM}
            title="ULICA OVA I ONA 10"
            price="200K"
            players={[
              player("Player1"),
              player("Player2"),
              player("Player3"),
              player("Player4")
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            backgroundColor={colors.BOARD_COLORS.GREEN}
            orientation={orientation.BOTTOM}
            title="ULICA OVA I ONA 5"
            price="200K"
            players={[
              player("Player1"),
              player("Player2"),
              player("Player3"),
              player("Player4")
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            backgroundColor={colors.BOARD_COLORS.GREEN}
            orientation={orientation.BOTTOM}
            title="ULICA OVA I ONA 6"
            price="200K"
            players={[
              player("Player1"),
              player("Player2"),
              player("Player3"),
              player("Player4")
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            backgroundColor={colors.BOARD_COLORS.GREEN}
            orientation={orientation.BOTTOM}
            title="ULICA OVA I ONA 7"
            price="200K"
            players={[
              player("Player1"),
              player("Player2"),
              player("Player3"),
              player("Player4")
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            backgroundColor={colors.BOARD_COLORS.GREEN}
            orientation={orientation.BOTTOM}
            title="ULICA OVA I ONA 8"
            price="200K"
            players={[
              player("Player1"),
              player("Player2"),
              player("Player3"),
              player("Player4")
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            backgroundColor={colors.BOARD_COLORS.GREEN}
            orientation={orientation.BOTTOM}
            title="ULICA OVA I ONA 9"
            price="200K"
            players={[
              player("Player1"),
              player("Player2"),
              player("Player3"),
              player("Player4")
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            backgroundColor={colors.BOARD_COLORS.GREEN}
            orientation={orientation.BOTTOM}
            title="ULICA OVA I ONA 10"
            price="200K"
            players={[
              player("Player1"),
              player("Player2"),
              player("Player3"),
              player("Player4")
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            backgroundColor={colors.BOARD_COLORS.GREEN}
            orientation={orientation.BOTTOM}
            title="ULICA OVA I ONA 5"
            price="200K"
            players={[
              player("Player1"),
              player("Player2"),
              player("Player3"),
              player("Player4")
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            backgroundColor={colors.BOARD_COLORS.GREEN}
            orientation={orientation.BOTTOM}
            title="ULICA OVA I ONA 6"
            price="200K"
            players={[
              player("Player1"),
              player("Player2"),
              player("Player3"),
              player("Player4")
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            backgroundColor={colors.BOARD_COLORS.GREEN}
            orientation={orientation.BOTTOM}
            title="ULICA OVA I ONA 7"
            price="200K"
            players={[
              player("Player1"),
              player("Player2"),
              player("Player3"),
              player("Player4")
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            backgroundColor={colors.BOARD_COLORS.GREEN}
            orientation={orientation.BOTTOM}
            title="ULICA OVA I ONA 8"
            price="200K"
            players={[
              player("Player1"),
              player("Player2"),
              player("Player3"),
              player("Player4")
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            backgroundColor={colors.BOARD_COLORS.GREEN}
            orientation={orientation.BOTTOM}
            title="ULICA OVA I ONA 9"
            price="200K"
            players={[
              player("Player1"),
              player("Player2"),
              player("Player3"),
              player("Player4")
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            backgroundColor={colors.BOARD_COLORS.GREEN}
            orientation={orientation.BOTTOM}
            title="ULICA OVA I ONA 10"
            price="200K"
            players={[
              player("Player1"),
              player("Player2"),
              player("Player3"),
              player("Player4")
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            backgroundColor={colors.BOARD_COLORS.GREEN}
            orientation={orientation.BOTTOM}
            title="ULICA OVA I ONA 9"
            price="200K"
            players={[
              player("Player1"),
              player("Player2"),
              player("Player3"),
              player("Player4")
            ]}
          />
        </div>
        <div className={styles.boardCard}>
          <Field
            backgroundColor={colors.BOARD_COLORS.GREEN}
            orientation={orientation.BOTTOM}
            title="ULICA OVA I ONA 10"
            price="200K"
            players={[
              player("Player1"),
              player("Player2"),
              player("Player3"),
              player("Player4")
            ]}
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default Board;
