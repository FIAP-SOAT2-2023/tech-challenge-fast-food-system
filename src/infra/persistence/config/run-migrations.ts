import { exec, ExecException } from 'child_process';

export function runMigrations() {
  const migrateProcess = exec('db-migrate up', (error: ExecException | null, stdout: string, stderr: string) => {
    if (error) {
      console.error('Erro ao executar migrações:', error);
      return;
    }
    console.log('Migrações executadas com sucesso:', stdout);
  });

  migrateProcess.stdout?.on('data', (data: Buffer) => {
    console.log(data.toString());
  });

  migrateProcess.stderr?.on('data', (data: Buffer) => {
    console.error(data.toString());
  });
  // Chama a função ao importar para executar as migrações
  
}

