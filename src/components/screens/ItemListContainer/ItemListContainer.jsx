import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { BusinessContext } from '../../contexts/BusinessContext.js';
import { makeStyles } from '@material-ui/core';
import { ItemList } from '../../widgets/ItemList/ItemList.jsx';


const useStyles = makeStyles((theme) => ({
    container: {
        height: '70vh',
        width: '100vw',
        display: 'flex'
    }
}));

export const ItemListContainer = () => {

    const classes = useStyles();
    
    const {setCategories, products, setProducts, setProductsToShow} = useContext(BusinessContext);

    const availableCategories = [
        { id: 'ctg01', name: 'pizzas', icon: 'data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMXB0IiB2aWV3Qm94PSItNDYgMCA1MTEgNTExLjk5NzY3IiB3aWR0aD0iNTExcHQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTQxMC4zNzEwOTQgOC4zNjMyODFjLTUuOTcyNjU2LTUuNzI2NTYyLTEzLjgxMjUtOC42ODM1OTMtMjIuMDc4MTI1LTguMzM1OTM3Mi03NC4xNTIzNDQgMy4xNDg0MzcyLTE0OC4wMzUxNTcgMjMuMTA5Mzc1Mi0yMTMuNjU2MjUgNTcuNzM0Mzc1Mi02NS42MDkzNzUgMzQuNjE3MTg3LTEyMy43NTM5MDcgODQuMzA0Njg3LTE2OC4xNDQ1MzEgMTQzLjY5MTQwNi00Ljk1NzAzMiA2LjYyODkwNi02LjkzNzUgMTQuNzgxMjUtNS41NzQyMTkgMjIuOTQ5MjE5IDEuMzY3MTg3IDguMTcxODc1IDUuODg2NzE5IDE1LjI0MjE4NyAxMi43MzA0NjkgMTkuOTA2MjVsNDAuMjY1NjI0IDI3LjQzNzVzLjAwMzkwNy4wMDM5MDYuMDAzOTA3LjAwMzkwNmwyMy45MDYyNSAxNi4yODkwNjJ2MjAuODYzMjgyYzAgNS41MjM0MzcgNC40NzY1NjIgMTAgMTAgMTAgNS41MjM0MzcgMCAxMC00LjQ3NjU2MyAxMC0xMHYtMjYuMTQ4NDM4YzAtMy4zMDg1OTQtMS42MzY3MTktNi40MDIzNDQtNC4zNjcxODgtOC4yNjU2MjVsLTE5Ljg5ODQzNy0xMy41NTg1OTNjOC44MjAzMTItMTIuMjc3MzQ0IDE4LjMxMjUtMjQuMDQyOTY5IDI4LjQwMjM0NC0zNS4zMDA3ODIgMTAuMzcxMDkzLTExLjU3NDIxOCAyMS40MTc5NjgtMjIuNTk3NjU2IDMzLjA3ODEyNC0zMi44ODI4MTIgMTEuMjIyNjU3LTkuODk4NDM4IDIyLjkxMDE1Ny0xOS4yNSAzNS4xMTMyODItMjcuOTE3OTY5IDEyLjY3OTY4Ny05LjAwMzkwNiAyNS44NjcxODctMTcuMjM4MjgxIDM5LjQ1MzEyNS0yNC44MDQ2ODcgMTMuNjA5Mzc1LTcuNTg1OTM4IDI3LjcyNjU2Mi0xNC4zMjgxMjYgNDIuMTMyODEyLTIwLjI2NTYyNiAxLjgwNDY4OC0uNzQyMTg3IDMuNjE3MTg4LTEuNDc2NTYyIDUuNDMzNTk0LTIuMTk5MjE4LS4wOTc2NTYgNy41MzEyNSAxLjM3MTA5NCAxNS4wNTg1OTQgNC40MzM1OTQgMjIuMTc5Njg3IDUuNzM4MjgxIDEzLjMzOTg0NCAxNi4zMjgxMjUgMjMuNjQ4NDM4IDI5LjgyMDMxMiAyOS4wMTk1MzEgNi41MTE3MTkgMi41OTc2NTcgMTMuMzI0MjE5IDMuODkwNjI2IDIwLjEyODkwNyAzLjg5MDYyNiA3LjI5Mjk2OCAwIDE0LjU3ODEyNC0xLjQ4ODI4MiAyMS40NzY1NjItNC40NTMxMjYgMTMuMzM5ODQ0LTUuNzQyMTg3IDIzLjY0NDUzMS0xNi4zMzIwMzEgMjkuMDE5NTMxLTI5LjgyMDMxMiA1LjM3NS0xMy40OTIxODggNS4xNzE4NzUtMjguMjY1NjI1LS41NjY0MDYtNDEuNjA1NDY5LS43NjU2MjUtMS43ODUxNTYtMS42MzY3MTktMy41MTk1MzEtMi41ODU5MzctNS4yMTA5MzcgMTMuNTE5NTMxLTEuNjcxODc1IDI3LjEyMTA5My0yLjY2Nzk2OSA0MC43MzgyODEtMi45OTYwOTR2MjUxLjQwNjI1Yy0xNi4yMzgyODEgNS41NzAzMTItMjkuMDA3ODEzIDE4LjY4MzU5NC0zNC4xOTUzMTMgMzUuMDUwNzgxLTUuNzQyMTg3IDE4LjEyMTA5NC0xLjM0NzY1NiAzOC40MjE4NzUgMTEuMzE2NDA2IDUyLjU4MjAzMSA2LjE3NTc4MiA2LjkwNjI1IDE0LjExNzE4OCAxMi4xNTIzNDQgMjIuODc4OTA3IDE1LjE1MjM0NHY0MC4zNzEwOTRsLTQ3LTMyLjAyNzM0NGMtMy4wNjY0MDctMi4wODU5MzctNy4wMzEyNS0yLjMxMjUtMTAuMzA4NTk0LS41NzgxMjUtMy4yNzM0MzcgMS43MzQzNzUtNS4zMjQyMTkgNS4xMzY3MTktNS4zMjQyMTkgOC44NDM3NXYyMy4xODM1OTRjMCA1LjA2NjQwNi00LjEyMTA5NCA5LjE4MzU5NC05LjE4MzU5NCA5LjE4MzU5NHMtOS4xODM1OTMtNC4xMjEwOTQtOS4xODM1OTMtOS4xODM1OTR2LTQ5LjMyODEyNWMwLTEuMjI2NTYyLS4yMjY1NjMtMi40MjE4NzUtLjY0NDUzMS0zLjUzNTE1NiAxNC4wODIwMzEtMTUuNDgwNDY5IDE4LjMyMDMxMi0zOC4yNjE3MTkgOS43NzM0MzctNTguMTI1LTExLjg0Mzc1LTI3LjUzNTE1Ni00My44ODY3MTktNDAuMzAwNzgyLTcxLjQyNTc4MS0yOC40NTMxMjUtMTEuMzg2NzE5IDQuODk4NDM3LTIwLjY3MTg3NSAxMy42MDE1NjItMjYuNDM3NSAyNC4zNTkzNzVsLTEzLjUzNTE1Ni05LjIyMjY1NmMtMy4wNjI1LTIuMDg1OTM4LTcuMDI3MzQ0LTIuMzA4NTk0LTEwLjMwNDY4OC0uNTc4MTI2LTMuMjc3MzQ0IDEuNzM0Mzc2LTUuMzI4MTI1IDUuMTM2NzE5LTUuMzI4MTI1IDguODM5ODQ0djM4LjQ2MDkzOGMwIDUuMDYyNS00LjExNzE4NyA5LjE3OTY4Ny05LjE3OTY4NyA5LjE3OTY4N3MtOS4xODM1OTQtNC4xMjEwOTMtOS4xODM1OTQtOS4xNzk2ODd2LTY0LjYwMTU2M2MwLTMuMzA4NTkzLTEuNjM2NzE5LTYuNDAyMzQzLTQuMzY3MTg4LTguMjY1NjI1bC00Ni4xODM1OTQtMzEuNDY0ODQ0Yy0zLjA1ODU5My0yLjA4NTkzNy03LjAyNzM0My0yLjMxMjUtMTAuMzA0Njg3LS41NzgxMjQtMy4yNzczNDQgMS43MzA0NjgtNS4zMjQyMTkgNS4xMzY3MTgtNS4zMjQyMTkgOC44Mzk4NDN2MTMzLjY2MDE1N2MwIDUuMDY2NDA2LTQuMTIxMDk0IDkuMTgzNTkzLTkuMTgzNTk0IDkuMTgzNTkzcy05LjE3OTY4Ny00LjEyMTA5My05LjE3OTY4Ny05LjE4MzU5M3YtNTMuNjQ4NDM4YzAtNS41MjM0MzgtNC40ODA0NjktMTAtMTAuMDAzOTA2LTEwLTUuNTIzNDM4IDAtMTAgNC40NzY1NjItMTAgMTB2NTMuNjQ4NDM4YzAgMTYuMDkzNzUgMTMuMDkzNzUgMjkuMTgzNTkzIDI5LjE4MzU5MyAyOS4xODM1OTMgMTYuMDg5ODQ0IDAgMjkuMTgzNTk0LTEzLjA4OTg0MyAyOS4xODM1OTQtMjkuMTgzNTkzdi0xMTQuNzQyMTg4bDI2LjE3OTY4OCAxNy44MzU5Mzh2NTkuMzE2NDA2YzAgMTYuMDg5ODQ0IDEzLjA4OTg0NCAyOS4xNzk2ODcgMjkuMTgzNTk0IDI5LjE3OTY4NyAxNi4wODk4NDMgMCAyOS4xODM1OTMtMTMuMDg5ODQzIDI5LjE4MzU5My0yOS4xNzk2ODd2LTE5LjU0Mjk2OWw4LjI4MTI1IDUuNjQ0NTMxYy4wMDM5MDcgMCAuMDAzOTA3LjAwMzkwNi4wMDc4MTMuMDAzOTA2bDY4LjQ5MjE4NyA0Ni42NzE4NzYgMS4xMTcxODguNzYxNzE4djQ0LjA0Mjk2OWMwIDE2LjA4OTg0NCAxMy4wODk4NDMgMjkuMTgzNTk0IDI5LjE4MzU5MyAyOS4xODM1OTQgMTYuMDg5ODQ0IDAgMjkuMTgzNTk0LTEzLjA5Mzc1IDI5LjE4MzU5NC0yOS4xODM1OTR2LTQuMjczNDM3bDQ3LjAwMzkwNiAzMi4wMzEyNWM2LjUyMzQzOCA0LjQ0NTMxMiAxNS42MzI4MTMtLjQwNjI1IDE1LjYzMjgxMy04LjI2NTYyNnYtNDcxLjk2MDkzN2MtLjAwMzkwNi04LjI3NzM0NC0zLjI5Mjk2OS0xNS45ODgyODEtOS4yNjk1MzEtMjEuNzE0ODQ0em0tMTYzLjgzMjAzMiAzNzAuNDM3NWMzLjQ5MjE4OC03LjczODI4MSA5LjcwMzEyNi0xMy44ODI4MTIgMTcuNzAzMTI2LTE3LjMyNDIxOSAxNy40MTAxNTYtNy40ODgyODEgMzcuNjYwMTU2LjU3ODEyNiA0NS4xNTIzNDMgMTcuOTg0Mzc2IDUuNTM5MDYzIDEyLjg4MjgxMiAyLjU4NTkzOCAyNy43MDcwMzEtNi44NzEwOTMgMzcuNDg4MjgxbC0zNy0yNS4yMTA5Mzh6bS0yMjUuODkwNjI0LTE1Ny42ODc1Yy0uNDU3MDMyLTIuNzM4MjgxLjIwNzAzMS01LjQ2NDg0MyAxLjg2MzI4MS03LjY4NzUgNDIuNjI1LTU3LjAyMzQzNyA5OC40NTcwMzEtMTA0LjczNDM3NSAxNjEuNDU3MDMxLTEzNy45NzY1NjIgNjMuMDE5NTMxLTMzLjI1IDEzMy45NjA5MzgtNTIuNDE3OTY5IDIwNS4xNjc5NjktNTUuNDM3NS4xNDg0MzctLjAwNzgxMy4yOTY4NzUtLjAxMTcxOS40NDE0MDYtLjAxMTcxOSAyLjYwMTU2MyAwIDUuMDU4NTk0Ljk4NDM3NSA2Ljk1MzEyNSAyLjgwMDc4MSAyIDEuOTIxODc1IDMuMTAxNTYyIDQuNTAzOTA3IDMuMTAxNTYyIDcuMjczNDM4djM4LjQ2ODc1Yy0xNS45ODgyODEuMzYzMjgxLTMxLjk2MDkzNyAxLjYyODkwNi00Ny44MDg1OTMgMy43NTM5MDYtNC41MTk1MzEuNjA5Mzc1LTkuMDQ2ODc1IDEuMjQ2MDk0LTEzLjU0Mjk2OSAxLjk4ODI4MS0yNC4xNzk2ODggNC4wMDM5MDYtNDguMTU2MjUgMTAuMTEzMjgyLTcxLjI2MTcxOSAxOC4xNjAxNTYtMTYuMzQ3NjU2IDUuNjkxNDA3LTMyLjMzOTg0MyAxMi41MzkwNjMtNDcuOTE0MDYyIDIwLjA4MjAzMi0xNS44MDQ2ODggNy42NDg0MzctMzEuMTQ0NTMxIDE2LjM5NDUzMS00NS44NDM3NSAyNS45OTYwOTQtMTQuNDU3MDMxIDkuNDQ1MzEyLTI4LjM0Mzc1IDE5LjcwMzEyNC00MS42MTcxODggMzAuNzQ2MDkzLTEzLjM5MDYyNSAxMS4xNDQ1MzEtMjYuMDIzNDM3IDIzLjE3MTg3NS0zNy45OTIxODcgMzUuODI0MjE5LTExLjc1IDEyLjQyNTc4MS0yMi42ODc1IDI1LjY0MDYyNS0zMi44NTkzNzUgMzkuMzc4OTA2LTEuMjczNDM4IDEuNzE4NzUtMi41MzUxNTcgMy40NDUzMTMtMy43ODEyNSA1LjE3OTY4OGwtMzIuMTAxNTYzLTIxLjg3NWMtMi4yODkwNjItMS41NTg1OTQtMy44MDQ2ODctMy45MjU3ODItNC4yNjE3MTgtNi42NjQwNjN6bTMyMi44MjAzMTItOTAuMTQ0NTMxYy0zLjM5ODQzOCA4LjUyNzM0NC05LjkxMDE1NiAxNS4yMjI2NTYtMTguMzQzNzUgMTguODUxNTYyLTguNDMzNTk0IDMuNjI1LTE3Ljc2OTUzMSAzLjc1MzkwNy0yNi4yOTY4NzUuMzU1NDY5LTguNTI3MzQ0LTMuMzk0NTMxLTE1LjIyMjY1Ni05LjkxMDE1Ni0xOC44NTE1NjMtMTguMzQzNzUtMy4wMTk1MzEtNy4wMjM0MzctMy42MDkzNzQtMTQuNjc5Njg3LTEuNzU3ODEyLTIxLjk2ODc1IDE1LjAwMzkwNi01LjAzMTI1IDMwLjMxNjQwNi05LjI2MTcxOSA0NS44MTI1LTEyLjQ4MDQ2OSA0LjIzNDM3NS0uODc4OTA2IDguNDcyNjU2LTEuNzE4NzUgMTIuNzI2NTYyLTIuNDgwNDY4IDIuNjU2MjUgMi44NTE1NjIgNC43ODUxNTcgNi4xMjEwOTQgNi4zNTE1NjMgOS43Njk1MzEgMy42Mjg5MDYgOC40MzM1OTQgMy43NTM5MDYgMTcuNzY5NTMxLjM1OTM3NSAyNi4yOTY4NzV6bTQyLjI1NzgxMiAyNzMuOTc2NTYyYy0zLjYyODkwNi04LjQyOTY4Ny0zLjc1MzkwNi0xNy43Njk1MzEtLjM1OTM3NC0yNi4yOTY4NzQgMi44MjgxMjQtNy4wOTc2NTcgNy44MTY0MDYtMTIuOTIxODc2IDE0LjI2OTUzMS0xNi43Njk1MzJ2NTguOTcyNjU2Yy02LjEwOTM3NS0zLjY1MjM0My0xMS4wMDc4MTMtOS4xNjAxNTYtMTMuOTEwMTU3LTE1LjkwNjI1em0wIDAiLz48cGF0aCBkPSJtMTY1LjY3MTg3NSAyOTUuNjI1YzYuNTExNzE5IDIuNTkzNzUgMTMuMzI0MjE5IDMuODg2NzE5IDIwLjEyODkwNiAzLjg4NjcxOSA3LjI5Mjk2OSAwIDE0LjU3ODEyNS0xLjQ4NDM3NSAyMS40NzY1NjMtNC40NTMxMjUgMjcuNTM1MTU2LTExLjg0NzY1NiA0MC4zMDA3ODEtNDMuODkwNjI1IDI4LjQ1MzEyNS03MS40MjU3ODItNS43MzgyODEtMTMuMzM5ODQzLTE2LjMyODEyNS0yMy42NDg0MzctMjkuODIwMzEzLTI5LjAxOTUzMS0xMy40ODgyODEtNS4zNzUtMjguMjY1NjI1LTUuMTc1NzgxLTQxLjYwNTQ2OC41NjY0MDctMTMuMzM5ODQ0IDUuNzM4MjgxLTIzLjY0NDUzMiAxNi4zMjgxMjQtMjkuMDE5NTMyIDI5LjgyMDMxMi01LjM3NSAxMy40ODgyODEtNS4xNzE4NzUgMjguMjY1NjI1LjU2NjQwNiA0MS42MDU0NjkgNS43MzgyODIgMTMuMzM5ODQzIDE2LjMyODEyNiAyMy42NDQ1MzEgMjkuODIwMzEzIDI5LjAxOTUzMXptLTExLjgwNDY4Ny02My4yMjI2NTZjMy4zOTQ1MzEtOC41MjczNDQgOS45MTAxNTYtMTUuMjIyNjU2IDE4LjM0Mzc1LTE4Ljg1MTU2MyA0LjM1OTM3NC0xLjg3NSA4Ljk2NDg0My0yLjgxNjQwNiAxMy41NzQyMTgtMi44MTY0MDYgNC4zMDA3ODIgMCA4LjYwNTQ2OS44MjAzMTMgMTIuNzIyNjU2IDIuNDYwOTM3IDguNTI3MzQ0IDMuMzk0NTMyIDE1LjIyMjY1NyA5LjkxMDE1NyAxOC44NTE1NjMgMTguMzM5ODQ0IDcuNDg4MjgxIDE3LjQwNjI1LS41ODIwMzEgMzcuNjYwMTU2LTE3Ljk4ODI4MSA0NS4xNDg0MzgtOC40Mjk2ODggMy42Mjg5MDYtMTcuNzY5NTMyIDMuNzUzOTA2LTI2LjI5Njg3NS4zNTkzNzUtOC41MjczNDQtMy4zOTg0MzgtMTUuMjIyNjU3LTkuOTE0MDYzLTE4Ljg0NzY1Ny0xOC4zNDM3NS0zLjYyODkwNi04LjQzMzU5NC0zLjc1NzgxMi0xNy43NzM0MzgtLjM1OTM3NC0yNi4yOTY4NzV6bTAgMCIvPjxwYXRoIGQ9Im0zMTMuODA0Njg4IDMxNi4xMTcxODhjNi41MTE3MTggMi41OTc2NTYgMTMuMzI0MjE4IDMuODkwNjI0IDIwLjEyODkwNiAzLjg5MDYyNCA3LjI5Mjk2OCAwIDE0LjU3ODEyNS0xLjQ4ODI4MSAyMS40NzY1NjItNC40NTcwMzEgMTMuMzM5ODQ0LTUuNzM4MjgxIDIzLjY0NDUzMi0xNi4zMjgxMjUgMjkuMDE5NTMyLTI5LjgxNjQwNiA1LjM3NS0xMy40OTIxODcgNS4xNzU3ODEtMjguMjY1NjI1LS41NjY0MDctNDEuNjA5Mzc1LTUuNzM4MjgxLTEzLjMzNTkzOC0xNi4zMjgxMjUtMjMuNjQ0NTMxLTI5LjgxNjQwNi0yOS4wMTk1MzEtMTMuNDkyMTg3LTUuMzc1LTI4LjI2OTUzMS01LjE3MTg3NS00MS42MDU0NjkuNTY2NDA2LTEzLjMzOTg0NCA1LjczODI4MS0yMy42NDg0MzcgMTYuMzI4MTI1LTI5LjAyMzQzNyAyOS44MjAzMTMtNS4zNzEwOTQgMTMuNDkyMTg3LTUuMTcxODc1IDI4LjI2NTYyNC41NjY0MDYgNDEuNjA1NDY4czE2LjMyODEyNSAyMy42NDg0MzggMjkuODIwMzEzIDI5LjAxOTUzMnptLTExLjgwNDY4OC02My4yMjI2NTdjMy4zOTQ1MzEtOC41MjczNDMgOS45MTAxNTYtMTUuMjE4NzUgMTguMzQzNzUtMTguODQ3NjU2IDQuMzU5Mzc1LTEuODc1IDguOTY0ODQ0LTIuODE2NDA2IDEzLjU3NDIxOS0yLjgxNjQwNiA0LjMwMDc4MSAwIDguNjA1NDY5LjgxNjQwNiAxMi43MjI2NTYgMi40NTcwMzEgOC41MjczNDQgMy4zOTg0MzggMTUuMjIyNjU2IDkuOTE0MDYyIDE4Ljg1MTU2MyAxOC4zNDM3NSAzLjYyNSA4LjQzMzU5NCAzLjc1MzkwNiAxNy43NzM0MzguMzU1NDY4IDI2LjMwMDc4MS0zLjM5ODQzNyA4LjUyMzQzOC05LjkxMDE1NiAxNS4yMTg3NS0xOC4zNDM3NSAxOC44NDc2NTctOC40Mjk2ODcgMy42MjUtMTcuNzY5NTMxIDMuNzUzOTA2LTI2LjI5Njg3NS4zNTU0NjgtOC41MjczNDMtMy4zOTQ1MzEtMTUuMjIyNjU2LTkuOTEwMTU2LTE4Ljg1MTU2Mi0xOC4zMzk4NDQtMy42MjUtOC40MzM1OTMtMy43NS0xNy43NzM0MzctLjM1NTQ2OS0yNi4zMDA3ODF6bTAgMCIvPjxwYXRoIGQ9Im04Ny44MzIwMzEgMzU4LjkxMDE1NmM0LjIzMDQ2OSAwIDguMDgyMDMxLTIuNzc3MzQ0IDkuNDUzMTI1LTYuNzY1NjI1IDEuMzc1LTMuOTk2MDkzLjAwNzgxMy04LjYxMzI4MS0zLjM2NzE4Ny0xMS4xNzk2ODctMy4yMzgyODEtMi40NjA5MzgtNy43MzA0NjktMi43MDcwMzItMTEuMjI2NTYzLS42MzI4MTMtMy42MTcxODcgMi4xNDQ1MzEtNS41MDM5MDYgNi40OTIxODgtNC42NDg0MzcgMTAuNjA1NDY5Ljk1NzAzMSA0LjU4MjAzMSA1LjEwMTU2MiA3Ljk3MjY1NiA5Ljc4OTA2MiA3Ljk3MjY1NnptMCAwIi8+PC9zdmc+' },
        { id: 'ctg02', name: 'tartas', icon: 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTEyLjAwNSA1MTIuMDA1IiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMi4wMDUgNTEyLjAwNSIgd2lkdGg9IjUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Zz48cGF0aCBkPSJtNTAxLjc0NiAyMzkuOTU4Yy0xMC4yMTItMTAuMTk0LTI2LjM3OS0xNi4zMTYtNDEuMTIxLTE4Ljg2Mi0zNy42NDUtNjMuOTk4LTExNy4zMjEtMTA1LjA5NC0yMDQuNjItMTA1LjA5NC04Ny4xOTggMC0xNjYuODM3IDQxLjAzMS0yMDQuNTIxIDEwNC45MjctMTMuNzQ5IDIuMjUzLTI2LjUxOCA3LjYxOC0zNy41MTMgMTUuODU5LTcuNDYgNS41OTQtMTIuMjk0IDEzLjc1Ny0xMy42MTMgMjIuOTg3LTEuMzE4IDkuMjI5IDEuMDM3IDE4LjQyIDYuNjMxIDI1Ljg3OCA5LjcxMiAxMi45NDggMjYuNTY5IDE3LjM2NyA0MS4wNTQgMTEuNDQybDI4LjY2NCA3Mi41ODFjMy4zNzQgOC41NDUgMTAuMzk2IDI2LjMyNyAyOS4zIDI2LjMyN2gyOTkuOTk4YzE4LjkwNCAwIDI1LjkyNi0xNy43ODEgMjkuMy0yNi4zMjdsMjguNjIzLTcyLjQ4YzEyLjc3NCA1LjE3OCAyNy42OCAyLjQwNiAzNy44MjUtNy43MzggNi42MTEtNi42MSAxMC4yNTMtMTUuMzk5IDEwLjI1My0yNC43NDgtLjAwMS05LjM0OC0zLjY0My0xOC4xMzctMTAuMjYtMjQuNzUyem0tMjQ1Ljc0MS0xMDMuOTU2Yzc1LjA1MyAwIDE0My42OTUgMzIuNTIzIDE4MC4xODkgODQuMTA2LTE4Ljk4MSAxLjY3OC0yOS45MjkgOC4zNjUtMzguMjE0IDEzLjQzLTYuNjM0IDQuMDU2LTEwLjM0NiA2LjE3Mi0xNS43MTEgNi4xNzJzLTkuMDc3LTIuMTE3LTE1LjcxMi02LjE3MmMtOS41NDQtNS44MzYtMjIuNjE2LTEzLjgyOC00Ny40NDMtMTMuODI4LTI0LjgyOCAwLTM3LjkgNy45OTItNDcuNDQ1IDEzLjgyOC02LjYzNCA0LjA1Ni0xMC4zNDYgNi4xNzItMTUuNzExIDYuMTcycy05LjA3Ny0yLjExNy0xNS43MTEtNi4xNzJjLTkuNTQ1LTUuODM1LTIyLjYxNy0xMy44MjgtNDcuNDQ0LTEzLjgyOC0yNC44MjggMC0zNy45IDcuOTkyLTQ3LjQ0NSAxMy44MjgtNi42MzQgNC4wNTYtMTAuMzQ1IDYuMTcyLTE1LjcxIDYuMTcycy05LjA3Ny0yLjExNy0xNS43MTItNi4xNzJjLTguMjcxLTUuMDU3LTE5LjE5OC0xMS43My0zOC4xMjQtMTMuNDIxIDM2LjQ5NC01MS41ODMgMTA1LjE2LTg0LjExNSAxODAuMTkzLTg0LjExNXptMTYwLjY5NyAyMjYuMzI4Yy00LjUxNiAxMS40MzUtNy4zNDMgMTMuNjcyLTEwLjY5OCAxMy42NzJoLTI5OS45OThjLTMuMzU2IDAtNi4xODMtMi4yMzctMTAuNjk4LTEzLjY3M2wtMjguNjc4LTcyLjYxNWM1LjI4OS4wMzcgOC45OTYgMi4xNDkgMTUuNTcyIDYuMTY5IDkuNTQ2IDUuODM1IDIyLjYxOCAxMy44MjggNDcuNDQ1IDEzLjgyOCAyNC44MjggMCAzNy44OTktNy45OTIgNDcuNDQ0LTEzLjgyOCA2LjYzNC00LjA1NiAxMC4zNDYtNi4xNzIgMTUuNzExLTYuMTcyczkuMDc3IDIuMTE3IDE1LjcxMSA2LjE3MmM5LjU0NSA1LjgzNSAyMi42MTcgMTMuODI4IDQ3LjQ0NCAxMy44MjggMjQuODI4IDAgMzcuOS03Ljk5MiA0Ny40NDQtMTMuODI4IDYuNjM1LTQuMDU2IDEwLjM0Ny02LjE3MiAxNS43MTItNi4xNzJzOS4wNzcgMi4xMTcgMTUuNzExIDYuMTcyYzkuNTQ1IDUuODM1IDIyLjYxNyAxMy44MjggNDcuNDQ0IDEzLjgyOHMzNy44OTktNy45OTIgNDcuNDQ0LTEzLjgyOGM2LjYxNS00LjA0NCAxMC4zMjUtNi4xNTkgMTUuNjY2LTYuMTcxem03MC45MDktODcuMDE1Yy01LjIgNS4yLTEzLjMxMyA1Ljg4NS0xOS4yODcgMS42MzItLjIwNS0uMTQ2LS40MTYtLjI4NS0uNjMyLS40MTUtNS40NjgtMy4zLTEyLjE0OS02LjgyMS0yMi4yNjgtNi44MjEtMTEuMjQ0IDAtMTguODE4IDQuNjMtMjYuMTQ0IDkuMTA5LTguNzU4IDUuMzU0LTE3LjgxMyAxMC44OTEtMzcuMDEyIDEwLjg5MXMtMjguMjU0LTUuNTM3LTM3LjAxMi0xMC44OTFjLTcuMzI1LTQuNDc5LTE0Ljg5OS05LjEwOS0yNi4xNDQtOS4xMDlzLTE4LjgxOSA0LjYzLTI2LjE0NCA5LjEwOWMtOC43NTggNS4zNTQtMTcuODE0IDEwLjg5MS0zNy4wMTMgMTAuODkxcy0yOC4yNTQtNS41MzctMzcuMDEyLTEwLjg5MWMtNy4zMjUtNC40NzktMTQuODk5LTkuMTA5LTI2LjE0NC05LjEwOXMtMTguODE5IDQuNjMxLTI2LjE0NCA5LjEwOWMtOC43NTggNS4zNTQtMTcuODEzIDEwLjg5MS0zNy4wMTIgMTAuODkxcy0yOC4yNTUtNS41MzctMzcuMDEzLTEwLjg5MWMtNy4zMjUtNC40NzktMTQuODk5LTkuMTA5LTI2LjE0NC05LjEwOS0xMC4zMDYgMC0xNi44OCAzLjUxNS0yMy44MSA3Ljc2Mi02LjQ3MSAzLjk1Mi0xNS4xMiAyLjI3Ni0xOS42OTQtMy44MjEtMi4zODgtMy4xODUtMy4zOTQtNy4xMDgtMi44My0xMS4wNDguNTYzLTMuOTQgMi42MjctNy40MjYgNS44MTEtOS44MTIgMTEuNDE2LTguNTU4IDI1LjQzLTEzLjA4MSA0MC41MjMtMTMuMDgxIDE5LjE5OCAwIDI4LjI1NSA1LjUzNyAzNy4wMTMgMTAuODkxIDcuMzI0IDQuNDc5IDE0Ljg5OCA5LjEwOSAyNi4xNDQgOS4xMDkgMTEuMjQ0IDAgMTguODE4LTQuNjMgMjYuMTQzLTkuMTA5IDguNzU4LTUuMzU0IDE3LjgxNC0xMC44OTEgMzcuMDEzLTEwLjg5MXMyOC4yNTQgNS41MzcgMzcuMDEyIDEwLjg5MWM3LjMyNSA0LjQ3OSAxNC44OTkgOS4xMDkgMjYuMTQ0IDkuMTA5IDExLjI0NCAwIDE4LjgxOC00LjYzIDI2LjE0NC05LjEwOCA4Ljc1OC01LjM1NSAxNy44MTMtMTAuODkyIDM3LjAxMy0xMC44OTIgMTkuMTk3IDAgMjguMjU0IDUuNTM3IDM3LjAxMiAxMC44OTEgNy4zMjQgNC40NzggMTQuODk4IDkuMTA5IDI2LjE0NCA5LjEwOSAxMS4yNDQgMCAxOC44MTgtNC42MyAyNi4xNDQtOS4xMDkgOC43NTgtNS4zNTQgMTcuODEzLTEwLjg5MSAzNy4wMTItMTAuODkxIDEzLjY0NyAwIDMzLjE2MSA1LjM4NyA0Mi4xODcgMTQuMzk2IDIuODMzIDIuODMzIDQuMzk0IDYuNTk5IDQuMzk0IDEwLjYwNHMtMS41NjEgNy43NzEtNC4zOTQgMTAuNjA0eiIvPjxwYXRoIGQ9Im0yNTYuMDQyIDE5OC4xNDNjNS41MjIgMCAxMC00LjQ3NyAxMC0xMHYtMjBjMC01LjUyMy00LjQ3OC0xMC0xMC0xMHMtMTAgNC40NzctMTAgMTB2MjBjMCA1LjUyMyA0LjQ3NyAxMCAxMCAxMHoiLz48cGF0aCBkPSJtMTkwLjU3MiAxOTUuMjE0YzIuNTU5IDAgNS4xMTgtLjk3NyA3LjA3MS0yLjkyOWwxNC4xNDMtMTQuMTQyYzMuOTA1LTMuOTA1IDMuOTA1LTEwLjIzNyAwLTE0LjE0Mi0zLjkwNC0zLjkwNS0xMC4yMzQtMy45MDUtMTQuMTQzIDBsLTE0LjE0MyAxNC4xNDJjLTMuOTA1IDMuOTA1LTMuOTA1IDEwLjIzNyAwIDE0LjE0MiAxLjk1NCAxLjk1MyA0LjUxMyAyLjkyOSA3LjA3MiAyLjkyOXoiLz48cGF0aCBkPSJtMzE0LjQ0IDE5Mi4yODZjMS45NTMgMS45NTMgNC41MTIgMi45MjkgNy4wNzEgMi45MjlzNS4xMTgtLjk3NyA3LjA3MS0yLjkyOWMzLjkwNS0zLjkwNSAzLjkwNS0xMC4yMzcgMC0xNC4xNDJsLTE0LjE0My0xNC4xNDJjLTMuOTA2LTMuOTA1LTEwLjIzNi0zLjkwNS0xNC4xNDMgMC0zLjkwNSAzLjkwNS0zLjkwNSAxMC4yMzcgMCAxNC4xNDJ6Ii8+PC9nPjwvc3ZnPg==' },
        { id: 'ctg02', name: 'empanadas', icon: 'data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibTI1NS40NTEgMzg2LjM5M2gxNS4wMzJ2MTUuMDMyaC0xNS4wMzJ6Ii8+PHBhdGggZD0ibTEwNS40IDMwOS40MzRjMy43Mi0zLjMwNSA3LjQ0Mi02LjI0NiAxMS4wNjEtOC43MzlsLTguNTI5LTEyLjM3OGMtNC4xMjUgMi44NDItOC4zMzcgNi4xNjYtMTIuNTE2IDkuODh6Ii8+PHBhdGggZD0ibTEyOC41NjQgMjkzLjM1N2MzLjgzMi0yLjAzNSA4LjE1Ni0zLjk3MSAxMi44NTItNS43NTZsLTUuMzQtMTQuMDUxYy01LjI3OSAyLjAwNi0xMC4xNzkgNC4yMDQtMTQuNTYyIDYuNTMxeiIvPjxwYXRoIGQ9Im01MTAuNTI2IDI0My42NTFjLTIuNzMtOS4zMTYtOC45NTQtMTYuOTQ4LTE3LjIyOC0yMS40NTkgNC41Ny0xOC41NDMtOC43NzQtMzkuMjg0LTI3LjU0My00Mi44MS0uODIzLTE5LjA5LTE5LjQ2NS0zNS4yNTEtMzguNDc3LTMzLjM1Ny02LjE3LTE4LjA2MS0yOC41NzctMjguMzA1LTQ2LjI3NC0yMS4xNTEtMTEuMDIzLTE1LjU5OS0zNS40MzgtMTkuMDkyLTUwLjM5Ni03LjIxNS0xNC45NTctMTEuODc0LTM5LjM3My04LjM4Ni01MC4zOTUgNy4yMTUtMTcuNjkzLTcuMTUyLTQwLjEwNSAzLjA5LTQ2LjI3MyAyMS4xNS0xOS4wMTQtMS44OTEtMzcuNjUzIDE0LjI2NS0zOC40NzcgMzMuMzU0LTE0LjI5NiAyLjc5Mi0yNi4yMjIgMTUuNzg1LTI4LjAyNCAzMC4yMDMtMTMuNDQ1LTMuMTc1LTI4LjY3MyAyLjQyMS0zNi42OTYgMTMuNTE0LTE3LjY5My03LjE1Mi00MC4xMDUgMy4wOS00Ni4yNzMgMjEuMTUtMTkuMDEyLTEuODg2LTM3LjY1NiAxNC4yNjQtMzguNDc3IDMzLjM1Ny0xOC43NyAzLjUyOS0zMi4xMTQgMjQuMjY3LTI3LjU0MyA0Mi44MS04LjI3NSA0LjUxLTE0LjQ5OCAxMi4xNDItMTcuMjI4IDIxLjQ1Ny02LjM2NCAxOC45NzEgMTMuNzY3IDQyLjkyNSAyMi4wODIgNTkuNTU2aDIxNy4xMTN2LTE1LjAzMmgtMjAxLjg4NGMxMi44OTYtMTc4LjQ5NSAyNzIuMzc0LTE3OC4zNzEgMjg1LjIxNCAwaC0zOC4yMzJ2MTUuMDMyaDUzLjQ2bDE0Ljk1Ny0yNi4wOTZjNy40OTktMTIuODA2IDEwLjU2NS0yMS43MjQgNy4xMjUtMzMuNDU3LTIuNzMtOS4zMTYtOC45NTMtMTYuOTQ4LTE3LjIyOC0yMS40NTkgNC41Ny0xOC41NDQtOC43NzQtMzkuMjg0LTI3LjU0NC00Mi44MS0uODIxLTE5LjA5My0xOS40NjUtMzUuMjQzLTM4LjQ3Ni0zMy4zNTctNi4xNjktMTguMDYtMjguNTgtMjguMzA2LTQ2LjI3NC0yMS4xNTEtNC4wNzEtNS40NS05LjYwNC05LjYtMTUuOTc4LTEyLjAxMiA3Ni45OTMtMTA3LjU5NiAyNTIuMzUyLTU0LjY4MyAyNTcuNjU4IDc3LjA4OGgtMTE4LjJsNi4wMTYgMTUuMDMyaDEyNy40MTJsMTQuOTU3LTI2LjA5NWM3LjkwMS0xMi40NTIgMTAuNTY2LTIxLjcyNCA3LjEyNi0zMy40NTd6bS0xMjguMzIyLTEwMi42NDljMTIuMTQ5LTguNDA5IDMwLjUwOC0uMDE1IDMyLjA5NSAxNC42NzcgMCAwIC45NTcgNi44NDcuOTU3IDYuODQ3LTExLjkyMS03LjYwNC0yNC45MjctMTMuNjQ5LTM4LjcyOC0xNy44NTN6bS0yNy4wNDItMTUuMjU4YzEwLjQ3NyAxLjQzNCAxNS4zOTQgOS4wODYgMTguODk4IDE4LjE5My0xMy4zOTUtMy44NDEtMjcuNTE0LTUuOTQ0LTQyLjA5OC02LjA2OCA1Ljg0MS03LjcxNSAxMi44NTUtMTMuNzA1IDIzLjItMTIuMTI1em0tNDkuMTA0IDBjMTAuMzU2LTEuNTgxIDE3LjM1NyA0LjQxNiAyMy4yMDIgMTIuMTMtMTQuNDQ2LjEyMi0yOC41OCAyLjE4NC00Mi4wODYgNi4wMzEgMy40OTUtOS4wOTkgOC40MzMtMTYuNzM0IDE4Ljg4NC0xOC4xNjF6bS00Ny4wOTcgMTMuODMyYzkuNTAxLTQuNDUzIDE3LjkwMy0uNjY0IDI1LjcwMSA1LjA3OC0xMy42NzUgNC4xNDMtMjYuNjggMTAuMTEyLTM4LjY4MSAxNy43NC43ODktOS43MzIgMy4zMzEtMTguNDc5IDEyLjk4LTIyLjgxOHptLTcyLjIwMiA2MS44OThjNS44MDEtNy42MyAxNC41NzEtOC4zMzIgMjMuNDIzLTcuODM3LTQuMDgxIDQuODI0LTcuODk0IDkuOTMtMTEuNDI3IDE1LjI5LTUuOTkxLjY0OS0xMS42OTUgMi43OTYtMTYuNjIzIDYuMjQ1LS4xNDUtNC44NzkgMS40NTMtOS43MSA0LjYyNy0xMy42OTh6bS0zMC4xNyAyMi40OTFjMTAuMzU3LTEuNTgzIDE3LjM1NSA0LjQxNCAyMy4xOTkgMTIuMTI3LTE0LjU4NC4xMjMtMjguNzA0IDIuMjI2LTQyLjA5OSA2LjA2OCAzLjUwMi05LjEwOSA4LjQzLTE2Ljc2NSAxOC45LTE4LjE5NXptLTQ3LjA5NyAxMy44MzNjOS41MTctNC40NiAxNy45MjMtLjY1IDI1LjczMSA1LjA5OC0xMy44MDEgNC4yMDUtMjYuODA4IDEwLjI0OS0zOC43MjkgMTcuODUzLjgyNy05LjgzIDMuMjQyLTE4LjUzMSAxMi45OTgtMjIuOTUxem0tODkuNTY0IDEyNy45NDFjLTkuNDc4LTEyLjE4Mi00Ljc4Ny0yOS41OTkgOS45MjctMzMuODYtLjAwMSAwIDcuMDU4LTIuMDUgNy4wNTgtMi4wNS01Ljk1MiAxMy4zNDQtMTAuMTAxIDI3LjY2LTEyLjE0NSA0Mi42Mzh6bTE3LjcyOC0zNy41NWMtNC42NDItOC44MDMtNy41NzMtMTcuNjQzLTEuNjI0LTI2LjczNyA1LjgyMS05LjEyOCAxNC45MDQtMTAuMTY5IDI0LjgwOC05LjU5My05LjI5IDEwLjkzNS0xNy4xMiAyMy4xNDUtMjMuMTg0IDM2LjMzem0yNC41Ni0zNy45MzZjLTEuOTkxLTkuNjg3LTIuMjAzLTE4LjkxNyA1Ljk3Ni0yNS45MTMgNy45MzUtNy4wMjIgMTcuMTUtNS42MzYgMjYuMzItMi4yOTktMTIuMDA1IDcuOTEzLTIyLjg3MyAxNy40MTUtMzIuMjk2IDI4LjIxMnptMjg0LjQxNyA1NS44NDhjMi4wMjUgMTIuNDg4LTkuMTIxIDI2LjM2Ni05LjEyMSAyNi4zNjYtMi4wNDQtMTQuOTc4LTYuMTkzLTI5LjI5My0xMi4xNDUtNDIuNjM3IDkuMDUxIDIuMTQ0IDE5LjYzNSA1Ljk1NyAyMS4yNjYgMTYuMjcxem0tMzcuOTU4LTU0LjI3M2MxNC43NC0uNDYgMjUuNjA0IDE2LjQ5MyAxOS4wMTkgMjkuNjkzIDAgMC0zLjA2OSA2LjY3LTMuMDY5IDYuNjctNi4wNjQtMTMuMTg2LTEzLjg5NC0yNS4zOTYtMjMuMTg0LTM2LjMzMSAwIDAgNy4yMDItLjAzMiA3LjIzNC0uMDMyem0tMzQuMjU3LTMxLjc2NWMxNC4wNDktNC42NjUgMjkuMzIgOC41ODEgMjYuNjkyIDIzLjE0NiAwIDAtMS4wNDQgNy4wNDUtMS4wNDQgNy4wNDUtOS40MjMtMTAuNzk4LTIwLjI5Mi0yMC4yOTktMzIuMjk3LTI4LjIxM3ptLTQxLjY4My0yMC44NGMxMi4xNTUtOC40MDkgMzAuNTA2LS4wMTQgMzIuMDk1IDE0LjY3NyAwIDAgLjk1NyA2Ljg0OC45NTcgNi44NDgtMTEuOTIxLTcuNjA0LTI0LjkyOC0xMy42NDktMzguNzI5LTE3Ljg1M3ptLTEwLjkyOC0zLjIwOSAyLjc4NSA2LjE0NWMtMTMuMzk1LTMuODQxLTI3LjUxNS01Ljk0NC00Mi4xLTYuMDY4bDQuMzUyLTUuMDdjOS4yNzUtMTEuNTI1IDI5LjI4Mi04LjY2NSAzNC45NjMgNC45OTN6bS0xMC4xMzgtNDQuMDg2Yy0xLjk5MS05LjY1My0yLjE0Ni0xOC44NDYgNS45OTItMjUuODA5IDcuODgzLTYuOTcgMTcuMDYxLTUuNjY5IDI2LjE4NS0yLjMzOS0xMS44NTYgNy44MDctMjIuNjg4IDE3LjI1MS0zMi4xNzcgMjguMTQ4em0yMDUuNTctMjguMTA4YzkuMTgtMy4zMzYgMTguMzc3LTQuNzIzIDI2LjMyIDIuMjk5IDguMTc2IDYuOTkgNy45NjggMTYuMjM4IDUuOTc1IDI1LjkxMy05LjQyMi0xMC43OTctMjAuMjktMjAuMjk5LTMyLjI5NS0yOC4yMTJ6bTMzLjY3MiAyOS44MThjOS44NjctLjU5MSAxOS4wNDEuNDk5IDI0LjgwNyA5LjU5NCA1Ljk0OCA5LjA4NiAzLjAxNSAxNy45NDctMS42MjQgMjYuNzM3LTYuMDYzLTEzLjE4Ni0xMy44OTMtMjUuMzk2LTIzLjE4My0zNi4zMzF6bTQwLjkxMSA3My44OC00Ljg0MSA2LjcyOGMtMi4wNDMtMTQuOTc4LTYuMTkyLTI5LjI5My0xMi4xNDQtNDIuNjM3bDcuMDU3IDIuMDVjMTQuMzA3IDMuNjc1IDE5LjY3NyAxOS43NDQgOS45MjggMzMuODU5eiIvPjxwYXRoIGQ9Im0yNTQuODY5IDIxMS4yMTJjMy43MjEtMy4zMDUgNy40NDItNi4yNDYgMTEuMDYxLTguNzM5bC04LjUyOC0xMi4zNzhjLTQuMTI2IDIuODQyLTguMzM3IDYuMTY2LTEyLjUxNyA5Ljg4eiIvPjxwYXRoIGQ9Im0yNzguMDM0IDE5NS4xMzVjMy44MzEtMi4wMzUgOC4xNTUtMy45NzEgMTIuODUxLTUuNzU2bC01LjMzOS0xNC4wNTFjLTUuMjgxIDIuMDA2LTEwLjE4IDQuMjA0LTE0LjU2MiA2LjUzMXoiLz48L2c+PC9zdmc+' },
        { id: 'ctg02', name: 'bebidas', icon: 'data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibTUxMiAzNjIuODQ4YzAtMTUuMDQ2LTUuODcyLTI5LjIwNS0xNi41MzUtMzkuODY4bC04MC43NDEtODAuNzRjLS4wOTItLjEtLjE3Ni0uMjA1LS4yNzMtLjMwMnMtLjIwMS0uMTgtLjMwMS0uMjcybC0yNi45NjktMjYuOTY4Yy0zLjkwNi0zLjkwNC0xMC4yMzYtMy45MDQtMTQuMTQzIDAtMy45MDUgMy45MDUtMy45MDUgMTAuMjM3IDAgMTQuMTQzbDIwLjE4NCAyMC4xODQtMzMuMzkzIDMzLjM5M2MtMS43MjkgMS43MjktMi43NjQgNC4wMy0yLjkxMSA2LjQ3MS0xLjA1OSAxNy41OTQtOC41NzcgMzQuMjQ3LTIxLjE0MSA0Ni44NjItMTIuNjQ1IDEyLjU5My0yOS4yOTggMjAuMTExLTQ2Ljg5MiAyMS4xNy0yLjQ0LjE0Ny00Ljc0MiAxLjE4My02LjQ3MSAyLjkxMWwtMzMuMzkzIDMzLjM5My05Ni45MDQtOTYuOTA0IDMzLjM3OS0zMy4zNzljMS43MjktMS43MjkgMi43NjQtNC4wMzEgMi45MTEtNi40NzIgMS4wNi0xNy42MjggOC41ODMtMzQuMjc1IDIxLjE4NC00Ni44NzYgMTIuNjAxLTEyLjYwMiAyOS4yNDktMjAuMTI1IDQ2Ljg3Ny0yMS4xODQgMi40NC0uMTQ3IDQuNzQzLTEuMTgzIDYuNDcxLTIuOTExbDMzLjM3OS0zMy4zNzkgMTIuNjU4IDEyLjY1OGMxLjk1MyAxLjk1MiA0LjUxMiAyLjkyOSA3LjA3MSAyLjkyOXM1LjExOC0uOTc3IDcuMDcxLTIuOTI5YzMuOTA1LTMuOTA1IDMuOTA1LTEwLjIzNyAwLTE0LjE0M2wtMTkuNzIzLTE5LjcyNGMtLjAwMi0uMDAyLS4wMDMtLjAwNC0uMDA1LS4wMDZzLS4wMDQtLjAwMy0uMDA2LS4wMDVsLTI0LjE3NC0yNC4xNzVjLTM3LjEwNy0zNy4xMDYtNzIuMzI5LTM0Ljk1MS05OC4wNS0zMy4zNzctMTUuMjYxLjkzNS0yNC4xNDYgMS4yMS0yOS4zMzktMy45ODNsLTEyLjgtMTIuNzk5Ljc4MS0uNzgxYzEuODc1LTEuODc2IDIuOTI5LTQuNDIxIDIuOTI5LTcuMDczIDAtMi42NTMtMS4wNTUtNS4xOTctMi45MzItNy4wNzJsLTMxLjA2NC0zMS4wMzZjLTYuODM3LTYuODM4LTE1Ljk2Mi0xMC42MDQtMjUuNjkzLTEwLjYwNHMtMTguODU3IDMuNzY2LTI1LjY5NSAxMC42MDRsLTQ2Ljc0MyA0Ni43NDNjLTYuODM4IDYuODM4LTEwLjYwNCAxNS45NjMtMTAuNjA0IDI1LjY5NHMzLjc2NiAxOC44NTYgMTAuNjAxIDI1LjY5MWwzMS4wMzkgMzEuMDY4YzEuODc1IDEuODc3IDQuNDE5IDIuOTMyIDcuMDcyIDIuOTMzaC4wMDJjMi42NTIgMCA1LjE5Ni0xLjA1NCA3LjA3MS0yLjkyOWwuNzgxLS43ODEgMTIuOCAxMi43OTljNS4xOTIgNS4xOTIgNC45MTcgMTQuMDc5IDMuOTgzIDI5LjMzOC0xLjU3NCAyNS43Mi0zLjczIDYwLjk0MyAzMy4zNzcgOTguMDUxbDI0LjE3NSAyNC4xNzVjLjAwMS4wMDEuMDAzLjAwMy4wMDQuMDA1cy4wMDMuMDAzLjAwNS4wMDRsMTEwLjc3IDExMC43N2MuMDg4LjA5NS4xNjcuMTk0LjI1OS4yODZzLjE5MS4xNzEuMjg2LjI1OGw4MC43NTUgODAuNzU1YzEwLjY2MyAxMC42NjQgMjQuODIyIDE2LjUzNiAzOS44NjggMTYuNTM2IDI3Ljk0MiAwIDUxLjE4OS0yMC40NDkgNTUuNjA3LTQ3LjE3MiAyMy43MDEtMy45MjMgNDIuNDUxLTIyLjY3MiA0Ni4zNzMtNDYuMzczIDI2LjcyMy00LjQxOCA0Ny4xNzItMjcuNjY1IDQ3LjE3Mi01NS42MDd6bS00ODcuMjU0LTI2OC4yNTRjLTMuMDYtMy4wNjEtNC43NDYtNy4xNjMtNC43NDYtMTEuNTUzczEuNjg2LTguNDkyIDQuNzQ2LTExLjU1Mmw0Ni43NDMtNDYuNzQzYzMuMDYtMy4wNiA3LjE2My00Ljc0NiAxMS41NTMtNC43NDZzOC40OTIgMS42ODYgMTEuNTU2IDQuNzQ5bDIzLjk5IDIzLjk2OC02OS44NyA2OS44N3ptNjguNTY2IDg3Ljc4OGMxLjAzNS0xNi45MTEgMi4wMTMtMzIuODg2LTkuODA0LTQ0LjcwMmwtMTIuNzk5LTEyLjc5OSA1NC4xNzItNTQuMTcyIDEyLjggMTIuNzk5YzExLjgxNyAxMS44MTcgMjcuNzkyIDEwLjgzOCA0NC43MDMgOS44MDQgMjQuMzUxLTEuNDkgNTEuOTUtMy4xOCA4Mi42ODYgMjcuNTU3bDE3LjEwOCAxNy4xMDktMzAuNzgzIDMwLjc4M2MtMjEuMDY3IDIuMTY0LTQwLjgwNiAxMS41NTQtNTUuOTQ0IDI2LjY5LTE1LjEzNyAxNS4xMzgtMjQuNTI2IDM0Ljg3Ni0yNi42ODkgNTUuOTQzbC0zMC43ODMgMzAuNzgzLTE3LjEwOC0xNy4xMDhjLTMwLjczOS0zMC43MzctMjkuMDUtNTguMzM3LTI3LjU1OS04Mi42ODd6bTM3MS4xOTUgMjE1LjczNWMtMi4xNTEtMTAuODA3LTcuNDM2LTIwLjc1NS0xNS40MDQtMjguNzUtMy44OTktMy45MTEtMTAuMjI5LTMuOTIxLTE0LjE0My0uMDIzLTMuOTExIDMuODk4LTMuOTIyIDEwLjIzLS4wMjMgMTQuMTQzIDYuODc0IDYuODk3IDEwLjY2IDE2LjAzNyAxMC42NiAyNS43MzcgMCAyMC4wNTctMTYuMzE3IDM2LjM3NC0zNi4zNzQgMzYuMzc0LTkuNyAwLTE4Ljg0LTMuNzg2LTI1LjczNy0xMC42Ni0zLjkxMy0zLjg5OS0xMC4yNDMtMy44ODktMTQuMTQzLjAyMy0zLjg5OCAzLjkxMi0zLjg4OCAxMC4yNDQuMDIzIDE0LjE0MyA3Ljk5NSA3Ljk2OCAxNy45NDQgMTMuMjUzIDI4Ljc1IDE1LjQwNC0zLjk4MSAxNS43NzgtMTguMjgyIDI3LjQ5Mi0zNS4yNjggMjcuNDkyLTkuNzA0IDAtMTguODQtMy43OTItMjUuNzI2LTEwLjY3OGwtNzMuOTU2LTczLjk1NyAzMC43OTctMzAuNzk4YzIxLjAyMy0yLjE2MiA0MC43NTgtMTEuNTM4IDU1Ljk1OC0yNi42NzYgMTUuMTEtMTUuMTcyIDI0LjQ4NC0zNC45MDUgMjYuNjQ2LTU1LjkyOWwzMC43OTgtMzAuNzk3IDczLjk1NyA3My45NTZjNi44ODYgNi44ODYgMTAuNjc4IDE2LjAyMSAxMC42NzggMjUuNzI2IDAgMTYuOTg3LTExLjcxNCAzMS4yODgtMjcuNDkzIDM1LjI3eiIvPjxwYXRoIGQ9Im0yOTMuNzI1IDIxMi44NTRjLTMuOTA2LTMuOTA0LTEwLjIzNi0zLjkwNC0xNC4xNDMgMGwtNjUuNTk0IDY1LjU5NGMtMy45MDUgMy45MDUtMy45MDUgMTAuMjM3IDAgMTQuMTQzIDEuOTUzIDEuOTUyIDQuNTEyIDIuOTI5IDcuMDcxIDIuOTI5czUuMTE5LS45NzcgNy4wNzEtMi45MjlsNjUuNTk0LTY1LjU5NGMzLjkwNi0zLjkwNSAzLjkwNi0xMC4yMzcuMDAxLTE0LjE0M3oiLz48cGF0aCBkPSJtMzEzLjU5OCAyNDYuODctNjUuNTk0IDY1LjU5NGMtMy45MDUgMy45MDUtMy45MDUgMTAuMjM3IDAgMTQuMTQzIDEuOTUzIDEuOTUyIDQuNTEyIDIuOTI5IDcuMDcxIDIuOTI5IDIuNTYgMCA1LjExOC0uOTc3IDcuMDcxLTIuOTI5bDY1LjU5NC02NS41OTRjMy45MDUtMy45MDUgMy45MDUtMTAuMjM3IDAtMTQuMTQzLTMuOTA2LTMuOTA0LTEwLjIzNi0zLjkwNC0xNC4xNDIgMHoiLz48cGF0aCBkPSJtMzQwLjMyOCAxOTcuMDM1YzEuOTQ2IDEuOTQ1IDQuNDg2IDIuOTE1IDcuMDI5IDIuOTE1IDIuNTYyIDAgNS4xMjUtLjk4NCA3LjA4NS0yLjk0MyAzLjkwNS0zLjkwNSAzLjg3Ny0xMC4yNjYtLjAyOC0xNC4xNzEtMy45MDYtMy45MDQtMTAuMjM2LTMuOTA0LTE0LjE0MyAwLTMuOTA1IDMuOTA1LTMuOTA1IDEwLjIzNyAwIDE0LjE0M3oiLz48L2c+PC9zdmc+' }
    ];

    const availableProducts = [
        { id: 'pdt01', category: 'ctg01', name: 'mozzarella', price: '500', description: 'La pizza de mozzarella es la más clásica entre todas las recetas de pizzas. Es la que nos gusta a la mayoría. Es una receta compuesta por una masa baja y crocante con una cubierta de salsa de tomate, mozzarella, aceitunas y orégano.'},
        { id: 'pdt02', category: 'ctg01', name: 'jamón cocido y morrón', price: '500', description: 'La pizza de mozzarella jamón cocido y morrón es una variante muy rica y gustosa. Es una receta que se encuentra entre las pizzas clásicas argentinas. El secreto que tiene esta receta es el de cocinar previamente el morrón y quitarle su piel, de esta manera queda más suave y se evita que nos caiga pesado.'},
        { id: 'pdt03', category: 'ctg01', name: 'napolitana', price: '500', description: 'La pizza napolitana en Argentina, es una pizza de mozzarella con el agregado de finas rodajas de tomate natural en la superficie y un condimento a base de aceite de oliva, ajo y perejil finamente picados.'},
        { id: 'pdt04', category: 'ctg01', name: 'cuatro quesos', price: '500', description: 'La pizza 4 quesos es ideal para los amantes del queso. Como bien lo dice su nombre, es una pizza de masa baja, crocante y en la superficie está condimentada con 4 tipos de quesos diferentes. La receta que les presento es una combinación entre mozzarella, queso tipo gruyere, queso tipo roquefort y queso parmesano.'},
        { id: 'pdt05', category: 'ctg01', name: 'fugazzetta', price: '500', description: 'La pizza de fugazzeta, se caracteriza por tener una masa alta, esponjosa, crocante y en la superficie, cebolla bien fina junto con mozzarella. Algunos le agregan queso parmesano arriba de la cebolla, el cual le da un toque especial de sabor. De todas formas, los ingredientes clásicos de esta receta son el aceite de oliva, la cebolla, mozzarella y orégano.'},
        { id: 'pdt06', category: 'ctg02', name: 'pascualina', price: '250', description: 'Las tartas pueden ser rellanas con lo que más nos guste, en este caso, les dejo la tradicional receta de la tarta de verdura o Pascualina. Como ingredientes principales tiene, espinaca, cebolla y huevo. Una delicia.'},
        { id: 'pdt07', category: 'ctg02', name: 'brócoli y calabaza anco', price: '250', description: 'Las tartas son una rica y práctica opción a la hora de cocinar. Esta receta a base de brócolis y calabaza anco es una rica combinación y muy buena opción para aquellos que quieran cuidar la línea.'},
        { id: 'pdt08', category: 'ctg02', name: 'quiche de espárragos', price: '250', description: 'La quiche es una especie de tarta pero con la diferencia que lleva una sola tapa y en su relleno no puede faltar la crema de leche. Esta receta tiene como ingrediente principal a los espárragos, la crema de leche y huevos. Una delicia absoluta.'},
        { id: 'pdt09', category: 'ctg02', name: 'verduras', price: '250', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '},
        { id: 'pdt10', category: 'ctg02', name: 'carne y huevo', price: '250', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '},
        { id: 'pdt11', category: 'ctg03', name: 'carne suave', price: '125', description: 'Las empanadas de carnes son las más tradicionales entre la familia de las empanadas. Esta receta está realizada con carne picada vacuna, condimentada con cebolla y ají morrón. Es una receta muy suave y es apta para cocinarse en horno o fritas.'},
        { id: 'pdt12', category: 'ctg03', name: 'carne cortada a cuchillo', price: '125', description: 'Las empanadas de carnes cortadas a cuchillo son una variante de las empanadas de carne tradicionales. Esta receta está realizada con carne vacuna la cual se corta en pequeños cubos, lo que hace sentir más la presencia de la carne. Condimentada con cebolla y ají morrón. Es una receta muy suave y es apta para cocinarse en horno o fritas.'},
        { id: 'pdt13', category: 'ctg03', name: 'humita', price: '125', description: 'Las empanadas de humita, son una exquisita combinación entre salsa blanca o bechamel y choclo bien dulce. Es una receta muy fácil y simple de hacer, sus ingredientes principales son la salsa blanca y el choclo, aunque algunas recetas incorporan en su relleno la mozzarella. Las empanadas humita, son aptas para cocinarse en horno o fritas.'},
        { id: 'pdt14', category: 'ctg03', name: 'caprese', price: '125', description: 'Las empanadas caprese, son una exquisita variante de las clásicas de jamón y queso. Es una receta muy fácil y simple de hacer, sus ingredientes principales son la mozzarella, tomate natural, aceitunas negras y albahaca. Algunos le agregan el jamón cocidos, lo que les da un increíble sabor. Las empanadas capreses, son aptas para cocinarse en horno o fritas.'},
        { id: 'pdt15', category: 'ctg03', name: 'jamón y queso', price: '125', description: 'Las empanadas de jamón y queso forman parte de los gustos más clásicos de las empanadas. Es una receta muy fácil y simple de hacer, las clásicas son con mozzarella y jamón pero hay quienes les agregan huevo duro, aceituna y otros tipos de quesos, lo que les da un increíble sabor. Las empanadas de jamón y queso son aptas para cocinarse en horno o fritas.'},
        { id: 'pdt16', category: 'ctg04', name: 'gaseosa', price: '80', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '},
        { id: 'pdt17', category: 'ctg04', name: 'agua saborizada', price: '80', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '},
        { id: 'pdt18', category: 'ctg04', name: 'jugo', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', price: '80'},
        { id: 'pdt19', category: 'ctg04', name: 'agua sin gas', price: '80', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '},
        { id: 'pdt20', category: 'ctg04', name: 'cerveza', price: '80', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '}
    ];

    useEffect(() => {
        setCategories(availableCategories);
    }, []);

    useEffect(() => {
        setProducts(availableProducts);
    }, []);

    const {id:onlyShowCategory} = useParams();

    const filterProducts = () => {
        return onlyShowCategory !== undefined ? products.filter(product => product.category === onlyShowCategory) : products;
    }

    console.log(filterProducts(products)); //valida que los filtros funcionan

    //no se esta actualizando correctamente productsToShow
    useEffect(() => {
        setProductsToShow(filterProducts(products));
    }, [onlyShowCategory]);

    return <section className={classes.container}>
        <ItemList/>
    </section>
}
