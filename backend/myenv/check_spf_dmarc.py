
# check_spf_dmarc.py
import dns.resolver

def check_spf(domain):
    try:
        answers = dns.resolver.resolve(domain, 'TXT')
        for rdata in answers:
            for txt_string in rdata.strings:
                if txt_string.startswith(b'v=spf1'):
                    return txt_string.decode('utf-8')
    except Exception as e:
        return f"No SPF record"

def check_dmarc(domain):
    try:
        dmarc_domain = f'_dmarc.{domain}'
        answers = dns.resolver.resolve(dmarc_domain, 'TXT')
        for rdata in answers:
            for txt_string in rdata.strings:
                if txt_string.startswith(b'v=DMARC1'):
                    return txt_string.decode('utf-8')
    except Exception as e:
        return f"No DMARC record"
