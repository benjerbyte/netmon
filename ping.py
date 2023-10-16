import subprocess

def ping_device(ip_address):
    try:
        output = subprocess.check_output("ping -c 1 " + ip_address, shell=True)
        if '1 packets transmitted, 1 received' in output:
            return True
        else:
            return False
    except Exception:
        return False
