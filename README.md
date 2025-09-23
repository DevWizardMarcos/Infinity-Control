# Sistema de Controle de Computadores

Sistema modular para gerenciar múltiplos computadores Linux Mint via SSH e Wake-on-LAN.

## 📁 Estrutura dos Módulos

### 🔌 `ssh_manager.py` - Gerenciamento SSH
- **`execute_ssh_command_on_multiple_hosts()`** - Executa comandos SSH em múltiplos computadores
- **`generate_ip_range()`** - Gera sequências de IPs

**Exemplo:**
```python
from ssh_manager import execute_ssh_command_on_multiple_hosts, generate_ip_range

# Gerar IPs e executar comando
ips = generate_ip_range("192.168.1", 10, 20)
results = execute_ssh_command_on_multiple_hosts(
    command="hostname",
    ip_generator=ips,
    password="senha",
    username="usuario"
)
```

### ⚡ `power_manager.py` - Gerenciamento de Energia
- **`wake_on_lan()`** - Envia pacote Wake-on-LAN
- **`prevent_sleep()`** - Previne suspensão dos computadores
- **`enable_sleep()`** - Reabilita suspensão
- **`keep_awake_temporarily()`** - Mantém acordado por período específico

**Exemplo:**
```python
from power_manager import wake_on_lan, prevent_sleep

# Acordar computador específico
wake_on_lan("AA:BB:CC:DD:EE:FF")

# Prevenir suspensão em range de IPs
ips = generate_ip_range("192.168.1", 10, 20)
prevent_sleep(ips, "senha", "usuario")
```

### 📄 `csv_manager.py` - Gerenciamento de Arquivo CSV
- **`load_macs_from_csv()`** - Carrega dados MAC/IP do CSV
- **`get_macs_only()`** - Retorna apenas lista de MACs
- **`get_ips_only()`** - Retorna apenas lista de IPs
- **`get_mac_ip_dict()`** - Retorna dicionário {IP: MAC}
- **`wake_all_computers_from_csv()`** - Wake-on-LAN para todos do CSV
- **`find_mac_by_ip()`** - Busca MAC por IP
- **`find_ip_by_mac()`** - Busca IP por MAC

**Exemplo:**
```python
from csv_manager import get_ips_only, wake_all_computers_from_csv

# Obter IPs do arquivo
ips = get_ips_only("macs.csv")

# Acordar todos os computadores do CSV
wake_all_computers_from_csv("macs.csv")
```

### 🛠️ `admin_tasks.py` - Tarefas Administrativas
- **`execute_poweroff()`** - Desliga computadores
- **`install_package()`** - Instala pacotes via apt
- **`install_clonezilla()`** - Instala Clonezilla especificamente
- **`get_system_info()`** - Coleta informações do sistema
- **`update_all_systems()`** - Atualiza sistemas operacionais
- **`restart_computers()`** - Reinicia computadores
- **`execute_on_all_from_csv()`** - Executa comando em todos do CSV

**Exemplo:**
```python
from admin_tasks import install_clonezilla, execute_poweroff
from csv_manager import get_ips_only

# Instalar clonezilla em todos
ips = get_ips_only("macs.csv")
install_clonezilla(iter(ips), "senha", "usuario")

# Desligar todos os computadores
execute_poweroff(iter(ips), "senha", "usuario")
```

## 🚀 Como Usar

### 1. Arquivo Principal
Execute o `main_new.py` para ver exemplos e testar o sistema:
```bash
python main_new.py
```

### 2. Uso Modular
Importe apenas os módulos que precisar:
```python
# Para tarefas básicas SSH
from ssh_manager import execute_ssh_command_on_multiple_hosts

# Para trabalhar com CSV
from csv_manager import get_ips_only, wake_all_computers_from_csv

# Para tarefas administrativas
from admin_tasks import install_package, execute_poweroff
```

### 3. Exemplos Práticos

#### Acordar todos os computadores:
```python
from csv_manager import wake_all_computers_from_csv
wake_all_computers_from_csv("macs.csv")
```

#### Instalar software em todos:
```python
from csv_manager import get_ips_only
from admin_tasks import install_package

ips = get_ips_only("macs.csv")
install_package(iter(ips), "senha", "clonezilla", "usuario")
```

#### Executar comando personalizado:
```python
from csv_manager import get_ips_only
from ssh_manager import execute_ssh_command_on_multiple_hosts

ips = get_ips_only("macs.csv")
results = execute_ssh_command_on_multiple_hosts(
    command="df -h",
    ip_generator=iter(ips),
    password="senha",
    username="usuario"
)
```

## 📋 Formato do Arquivo CSV

O arquivo `macs.csv` deve ter o formato:
```
MAC_ADDRESS,IP_ADDRESS
0A-E0-AF-A2-12-53,35.0.0.152
00-E0-4C-DC-07-05,35.0.0.170
```

## ⚙️ Configuração

Edite as variáveis no início dos arquivos:
- **USERNAME**: Nome do usuário padrão
- **PASSWORD**: Senha padrão
- **CSV_FILE**: Caminho para o arquivo CSV

## 🔧 Dependências

```bash
pip install paramiko
```

## 📁 Estrutura de Arquivos

```
CCI/
├── main_new.py          # Arquivo principal com exemplos
├── ssh_manager.py       # Gerenciamento SSH
├── power_manager.py     # Gerenciamento de energia/Wake-on-LAN
├── csv_manager.py       # Gerenciamento de arquivo CSV
├── admin_tasks.py       # Tarefas administrativas
├── macs.csv            # Arquivo com MACs e IPs
├── requirements.txt    # Dependências
└── README.md          # Esta documentação
```

## 🎯 Vantagens da Estrutura Modular

- ✅ **Organização**: Cada módulo tem responsabilidade específica
- ✅ **Reutilização**: Importe apenas o que precisar
- ✅ **Manutenção**: Fácil de encontrar e modificar funções
- ✅ **Escalabilidade**: Fácil adicionar novas funcionalidades
- ✅ **Legibilidade**: Código mais limpo e compreensível