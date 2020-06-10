import React from "react";
import Grid from "@material-ui/core/Grid";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Field from "../Field/Field";
import colors from "../../constants/colors";
import fieldTypes from "../../constants/fieldType";
import Dice from "../Dice/Dice";

const player = name => ({
  name,
  icon: <AccountCircleIcon color="inherit" />,
  color: colors.PLAYER_COLORS.RED
});

const Board = () => {
  return (
    <Grid container direction="column" style={{marginTop: 70}}>
      
      {/* prvi redak */}
      <Grid container direction="row" justify="space-around" alignContent="center" style={{marginTop: 30, marginBottom: 30}}>
        <Grid item xs={1}>
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
        </Grid>
        <Grid item xs={1}>
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
        </Grid>
        <Grid item xs={1}>
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
        </Grid>
        <Grid item xs={1}>
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
        </Grid>
        <Grid item xs={1}>
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
        </Grid>
        <Grid item xs={1}>
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
        </Grid>
        <Grid item xs={1}>
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
        </Grid>
        <Grid item xs={1}>
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
        </Grid>
      </Grid>

      {/* drugi redak */}

      <Grid container direction="row" justify="space-around" alignContent="center" style={{marginTop: 30, marginBottom: 30}}>
        <Grid item xs={1}>
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
        </Grid>
        <Grid item xs={1}>
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
        </Grid>
        <Grid item xs={1}>
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
        </Grid>
        <Grid item xs={1}>
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
        </Grid>
        <Grid item xs={1}>
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
        </Grid>
        <Grid item xs={1}>
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
        </Grid>
        <Grid item xs={1}>
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
        </Grid>
        <Grid item xs={1}>
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
        </Grid>
      </Grid>

      {/* treci redak */}

      <Grid container direction="row" justify="space-around" alignContent="center" style={{marginTop: 30, marginBottom: 30}}>
        <Grid item xs={1}>
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
        </Grid>
        <Grid item xs={1}>
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
        </Grid>
        <Grid item xs={1}>
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
        </Grid>
        <Grid item xs={1}>
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
        </Grid>
        <Grid item xs={1}>
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
        </Grid>
        <Grid item xs={1}>
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
        </Grid>
        <Grid item xs={1}>
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
        </Grid>
        <Grid item xs={1}>
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
        </Grid>
      </Grid>

      {/* cetvrti redak */}

      <Grid container direction="row" justify="space-around" alignContent="center" style={{marginTop: 30, marginBottom: 30}}>
        <Grid item xs={1}>
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
        </Grid>
        <Grid item xs={1}>
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
        </Grid>
        <Grid item xs={1}>
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
        </Grid>
        <Grid item xs={1}>
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
        </Grid>
        <Grid item xs={1}>
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
        </Grid>
        <Grid item xs={1}>
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
        </Grid>
        <Grid item xs={1}>
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
        </Grid>
        <Grid item xs={1}>
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
        </Grid>
      </Grid>

      {/* peti redak */}

      <Grid container direction="row" justify="space-around" alignContent="center" style={{marginTop: 30, marginBottom: 30}}>
        <Grid item xs={1}>
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
        </Grid>
        <Grid item xs={1}>
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
        </Grid>
        <Grid item xs={1}>
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
        </Grid>
        <Grid item xs={1}>
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
        </Grid>
        <Grid item xs={1}>
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
        </Grid>
        <Grid item xs={1}>
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
        </Grid>
        <Grid item xs={1}>
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
        </Grid>
        <Grid item xs={1}>
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
        </Grid>
      </Grid>
      
      <Grid container direction="row" justify="space-around" alignContent="center" style={{marginTop: 30, marginBottom: 20}}>
        <Dice/>
      </Grid>

    </Grid>
  );
};

export default Board;
