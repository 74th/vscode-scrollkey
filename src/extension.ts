'use strict';
import * as vscode from 'vscode';

function scroll(line:number, position:string) {
    let currentPosition = vscode.window.activeTextEditor.selection.active;
    let moveToLine = currentPosition.line + line;
    let documentLineCount = vscode.window.activeTextEditor.document.lineCount;
    if( moveToLine > documentLineCount-1 ){
        moveToLine = documentLineCount-1;
    }
    if (moveToLine < 0) {
        moveToLine = 0;
    }
    let moveToCharactor = vscode.window.activeTextEditor.document.lineAt(moveToLine).firstNonWhitespaceCharacterIndex;
    let newPosition = new vscode.Position(moveToLine,moveToCharactor)
        vscode.window.activeTextEditor.selection = new vscode.Selection(newPosition, newPosition);
        vscode.window.activeTextEditor.revealRange(vscode.window.activeTextEditor.selection, vscode.TextEditorRevealType.InCenter);
}

export function activate(context: vscode.ExtensionContext) {

    let line1 = 30;
    let line2 = 60;
    let line3 = 90;
    function loadConfiguration() {
        let conf = vscode.workspace.getConfiguration("mykeyscroll");
        line1 = conf.get<number>("line1", 30);
        line2 = conf.get<number>("line2", 60);
        line3 = conf.get<number>("line3", 90);
    }
    loadConfiguration();
    vscode.workspace.onDidChangeConfiguration(loadConfiguration);

    context.subscriptions.push(vscode.commands.registerCommand('mykeyscroll.up1', () => {
        scroll(-1*line1,null)
    }));
    context.subscriptions.push(vscode.commands.registerCommand('mykeyscroll.up2', () => {
        scroll(-1*line2,null)
    }));
    context.subscriptions.push(vscode.commands.registerCommand('mykeyscroll.up3', () => {
        scroll(-1*line3,null)
    }));
    context.subscriptions.push(vscode.commands.registerCommand('mykeyscroll.down1', () => {
        scroll(line1,null)
    }));
    context.subscriptions.push(vscode.commands.registerCommand('mykeyscroll.down2', () => {
        scroll(line2,null)
    }));
    context.subscriptions.push(vscode.commands.registerCommand('mykeyscroll.down3', () => {
        scroll(line3,null)
    }));
}

export function deactivate() {
}