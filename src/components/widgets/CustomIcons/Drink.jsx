import React from 'react';
import { makeStyles } from '@material-ui/core';

export const Drink = () => {

    const classes = useStyles();

    return <div className={classes.container}></div>
}

const useStyles = makeStyles((theme) => ({
    container: {
        height: '40px',
        minWidth: '40px',
        backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibTUxMiAzNjIuODQ4YzAtMTUuMDQ2LTUuODcyLTI5LjIwNS0xNi41MzUtMzkuODY4bC04MC43NDEtODAuNzRjLS4wOTItLjEtLjE3Ni0uMjA1LS4yNzMtLjMwMnMtLjIwMS0uMTgtLjMwMS0uMjcybC0yNi45NjktMjYuOTY4Yy0zLjkwNi0zLjkwNC0xMC4yMzYtMy45MDQtMTQuMTQzIDAtMy45MDUgMy45MDUtMy45MDUgMTAuMjM3IDAgMTQuMTQzbDIwLjE4NCAyMC4xODQtMzMuMzkzIDMzLjM5M2MtMS43MjkgMS43MjktMi43NjQgNC4wMy0yLjkxMSA2LjQ3MS0xLjA1OSAxNy41OTQtOC41NzcgMzQuMjQ3LTIxLjE0MSA0Ni44NjItMTIuNjQ1IDEyLjU5My0yOS4yOTggMjAuMTExLTQ2Ljg5MiAyMS4xNy0yLjQ0LjE0Ny00Ljc0MiAxLjE4My02LjQ3MSAyLjkxMWwtMzMuMzkzIDMzLjM5My05Ni45MDQtOTYuOTA0IDMzLjM3OS0zMy4zNzljMS43MjktMS43MjkgMi43NjQtNC4wMzEgMi45MTEtNi40NzIgMS4wNi0xNy42MjggOC41ODMtMzQuMjc1IDIxLjE4NC00Ni44NzYgMTIuNjAxLTEyLjYwMiAyOS4yNDktMjAuMTI1IDQ2Ljg3Ny0yMS4xODQgMi40NC0uMTQ3IDQuNzQzLTEuMTgzIDYuNDcxLTIuOTExbDMzLjM3OS0zMy4zNzkgMTIuNjU4IDEyLjY1OGMxLjk1MyAxLjk1MiA0LjUxMiAyLjkyOSA3LjA3MSAyLjkyOXM1LjExOC0uOTc3IDcuMDcxLTIuOTI5YzMuOTA1LTMuOTA1IDMuOTA1LTEwLjIzNyAwLTE0LjE0M2wtMTkuNzIzLTE5LjcyNGMtLjAwMi0uMDAyLS4wMDMtLjAwNC0uMDA1LS4wMDZzLS4wMDQtLjAwMy0uMDA2LS4wMDVsLTI0LjE3NC0yNC4xNzVjLTM3LjEwNy0zNy4xMDYtNzIuMzI5LTM0Ljk1MS05OC4wNS0zMy4zNzctMTUuMjYxLjkzNS0yNC4xNDYgMS4yMS0yOS4zMzktMy45ODNsLTEyLjgtMTIuNzk5Ljc4MS0uNzgxYzEuODc1LTEuODc2IDIuOTI5LTQuNDIxIDIuOTI5LTcuMDczIDAtMi42NTMtMS4wNTUtNS4xOTctMi45MzItNy4wNzJsLTMxLjA2NC0zMS4wMzZjLTYuODM3LTYuODM4LTE1Ljk2Mi0xMC42MDQtMjUuNjkzLTEwLjYwNHMtMTguODU3IDMuNzY2LTI1LjY5NSAxMC42MDRsLTQ2Ljc0MyA0Ni43NDNjLTYuODM4IDYuODM4LTEwLjYwNCAxNS45NjMtMTAuNjA0IDI1LjY5NHMzLjc2NiAxOC44NTYgMTAuNjAxIDI1LjY5MWwzMS4wMzkgMzEuMDY4YzEuODc1IDEuODc3IDQuNDE5IDIuOTMyIDcuMDcyIDIuOTMzaC4wMDJjMi42NTIgMCA1LjE5Ni0xLjA1NCA3LjA3MS0yLjkyOWwuNzgxLS43ODEgMTIuOCAxMi43OTljNS4xOTIgNS4xOTIgNC45MTcgMTQuMDc5IDMuOTgzIDI5LjMzOC0xLjU3NCAyNS43Mi0zLjczIDYwLjk0MyAzMy4zNzcgOTguMDUxbDI0LjE3NSAyNC4xNzVjLjAwMS4wMDEuMDAzLjAwMy4wMDQuMDA1cy4wMDMuMDAzLjAwNS4wMDRsMTEwLjc3IDExMC43N2MuMDg4LjA5NS4xNjcuMTk0LjI1OS4yODZzLjE5MS4xNzEuMjg2LjI1OGw4MC43NTUgODAuNzU1YzEwLjY2MyAxMC42NjQgMjQuODIyIDE2LjUzNiAzOS44NjggMTYuNTM2IDI3Ljk0MiAwIDUxLjE4OS0yMC40NDkgNTUuNjA3LTQ3LjE3MiAyMy43MDEtMy45MjMgNDIuNDUxLTIyLjY3MiA0Ni4zNzMtNDYuMzczIDI2LjcyMy00LjQxOCA0Ny4xNzItMjcuNjY1IDQ3LjE3Mi01NS42MDd6bS00ODcuMjU0LTI2OC4yNTRjLTMuMDYtMy4wNjEtNC43NDYtNy4xNjMtNC43NDYtMTEuNTUzczEuNjg2LTguNDkyIDQuNzQ2LTExLjU1Mmw0Ni43NDMtNDYuNzQzYzMuMDYtMy4wNiA3LjE2My00Ljc0NiAxMS41NTMtNC43NDZzOC40OTIgMS42ODYgMTEuNTU2IDQuNzQ5bDIzLjk5IDIzLjk2OC02OS44NyA2OS44N3ptNjguNTY2IDg3Ljc4OGMxLjAzNS0xNi45MTEgMi4wMTMtMzIuODg2LTkuODA0LTQ0LjcwMmwtMTIuNzk5LTEyLjc5OSA1NC4xNzItNTQuMTcyIDEyLjggMTIuNzk5YzExLjgxNyAxMS44MTcgMjcuNzkyIDEwLjgzOCA0NC43MDMgOS44MDQgMjQuMzUxLTEuNDkgNTEuOTUtMy4xOCA4Mi42ODYgMjcuNTU3bDE3LjEwOCAxNy4xMDktMzAuNzgzIDMwLjc4M2MtMjEuMDY3IDIuMTY0LTQwLjgwNiAxMS41NTQtNTUuOTQ0IDI2LjY5LTE1LjEzNyAxNS4xMzgtMjQuNTI2IDM0Ljg3Ni0yNi42ODkgNTUuOTQzbC0zMC43ODMgMzAuNzgzLTE3LjEwOC0xNy4xMDhjLTMwLjczOS0zMC43MzctMjkuMDUtNTguMzM3LTI3LjU1OS04Mi42ODd6bTM3MS4xOTUgMjE1LjczNWMtMi4xNTEtMTAuODA3LTcuNDM2LTIwLjc1NS0xNS40MDQtMjguNzUtMy44OTktMy45MTEtMTAuMjI5LTMuOTIxLTE0LjE0My0uMDIzLTMuOTExIDMuODk4LTMuOTIyIDEwLjIzLS4wMjMgMTQuMTQzIDYuODc0IDYuODk3IDEwLjY2IDE2LjAzNyAxMC42NiAyNS43MzcgMCAyMC4wNTctMTYuMzE3IDM2LjM3NC0zNi4zNzQgMzYuMzc0LTkuNyAwLTE4Ljg0LTMuNzg2LTI1LjczNy0xMC42Ni0zLjkxMy0zLjg5OS0xMC4yNDMtMy44ODktMTQuMTQzLjAyMy0zLjg5OCAzLjkxMi0zLjg4OCAxMC4yNDQuMDIzIDE0LjE0MyA3Ljk5NSA3Ljk2OCAxNy45NDQgMTMuMjUzIDI4Ljc1IDE1LjQwNC0zLjk4MSAxNS43NzgtMTguMjgyIDI3LjQ5Mi0zNS4yNjggMjcuNDkyLTkuNzA0IDAtMTguODQtMy43OTItMjUuNzI2LTEwLjY3OGwtNzMuOTU2LTczLjk1NyAzMC43OTctMzAuNzk4YzIxLjAyMy0yLjE2MiA0MC43NTgtMTEuNTM4IDU1Ljk1OC0yNi42NzYgMTUuMTEtMTUuMTcyIDI0LjQ4NC0zNC45MDUgMjYuNjQ2LTU1LjkyOWwzMC43OTgtMzAuNzk3IDczLjk1NyA3My45NTZjNi44ODYgNi44ODYgMTAuNjc4IDE2LjAyMSAxMC42NzggMjUuNzI2IDAgMTYuOTg3LTExLjcxNCAzMS4yODgtMjcuNDkzIDM1LjI3eiIvPjxwYXRoIGQ9Im0yOTMuNzI1IDIxMi44NTRjLTMuOTA2LTMuOTA0LTEwLjIzNi0zLjkwNC0xNC4xNDMgMGwtNjUuNTk0IDY1LjU5NGMtMy45MDUgMy45MDUtMy45MDUgMTAuMjM3IDAgMTQuMTQzIDEuOTUzIDEuOTUyIDQuNTEyIDIuOTI5IDcuMDcxIDIuOTI5czUuMTE5LS45NzcgNy4wNzEtMi45MjlsNjUuNTk0LTY1LjU5NGMzLjkwNi0zLjkwNSAzLjkwNi0xMC4yMzcuMDAxLTE0LjE0M3oiLz48cGF0aCBkPSJtMzEzLjU5OCAyNDYuODctNjUuNTk0IDY1LjU5NGMtMy45MDUgMy45MDUtMy45MDUgMTAuMjM3IDAgMTQuMTQzIDEuOTUzIDEuOTUyIDQuNTEyIDIuOTI5IDcuMDcxIDIuOTI5IDIuNTYgMCA1LjExOC0uOTc3IDcuMDcxLTIuOTI5bDY1LjU5NC02NS41OTRjMy45MDUtMy45MDUgMy45MDUtMTAuMjM3IDAtMTQuMTQzLTMuOTA2LTMuOTA0LTEwLjIzNi0zLjkwNC0xNC4xNDIgMHoiLz48cGF0aCBkPSJtMzQwLjMyOCAxOTcuMDM1YzEuOTQ2IDEuOTQ1IDQuNDg2IDIuOTE1IDcuMDI5IDIuOTE1IDIuNTYyIDAgNS4xMjUtLjk4NCA3LjA4NS0yLjk0MyAzLjkwNS0zLjkwNSAzLjg3Ny0xMC4yNjYtLjAyOC0xNC4xNzEtMy45MDYtMy45MDQtMTAuMjM2LTMuOTA0LTE0LjE0MyAwLTMuOTA1IDMuOTA1LTMuOTA1IDEwLjIzNyAwIDE0LjE0M3oiLz48L2c+PC9zdmc+")',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '50px',
        backgroundColor: '#FFE9E9',
    }
}));