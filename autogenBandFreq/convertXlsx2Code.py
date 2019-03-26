import xlrd

filename = r'.\summary.csv'
ag_gsm_filename = r'.\ag_gsm.txt'

class ULDL:
    def __init__(self, chan_range, freq_base):
        self.chan_range = chan_range
        self.freq_base = freq_base

class Band:
    def __init__(self, name):
        self.name = name
        self.dl = None
        self.ul = None
        self.type = 'default'

    def setDL(self, dl):
        self.dl = dl

    def setUL(self, ul):
        self.ul = ul

class Tech:
    def __init__(self, name):
        self.name = name
        self.band_list = []

    def addBand(self, band):
        self.band_list.append(band)


with open(filename) as f:
