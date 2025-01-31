import * as vscode from 'vscode';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
  let currentPanel: vscode.WebviewPanel | undefined = undefined;

  context.subscriptions.push(
    vscode.commands.registerCommand('unseen.start', () => {
      const columnToShowIn = vscode.window.activeTextEditor
      ? vscode.window.activeTextEditor.viewColumn
      : undefined;

      if (currentPanel) {
        currentPanel.reveal(columnToShowIn);
      } else {
        currentPanel = vscode.window.createWebviewPanel(
          'unseenLibrary',
          'Unseen Library',
          vscode.ViewColumn.One,
          {
            enableScripts: true,
            localResourceRoots: [
              vscode.Uri.file(path.join(context.extensionPath, 'media'))
            ]
          }
        );

        const onDiskPath = vscode.Uri.file(
          path.join(context.extensionPath, 'media', 'index.js')
        );

        const src = onDiskPath.with({ scheme: 'vscode-resource' });

        currentPanel.webview.html = getWebviewContent(src);

        // Handle messages from the webview
        currentPanel.webview.onDidReceiveMessage(
          message => {
            switch (message.command) {
              case 'updateInventory':
                // Handle inventory updates here
                vscode.window.showInformationMessage(`Inventory updated: ${message.item}`);
                // Example terminal integration for feedback
                const terminal = vscode.window.createTerminal('Library Whispers');
                terminal.show();
                terminal.sendText(`echo "The shelves creak: You found a ${message.item}..."`);
                break;
              case 'showError':
                // Display an error message
                vscode.window.showErrorMessage(message.message);
                break;
            }
          },
          undefined,
          context.subscriptions
        );

        currentPanel.onDidDispose(
          () => {
            currentPanel = undefined;
          },
          null,
          context.subscriptions
        );
      }
    })
  );
}

function getWebviewContent(src: vscode.Uri) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Unseen Library</title>
</head>
<body>
  <div id="root"></div>
  <script src="${src}"></script>
</body>
</html>`;
}